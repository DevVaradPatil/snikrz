const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Shoe = require('./models/Shoe.cjs')
const User = require('./models/User.cjs')

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://varadpatil:Master123@cluster01.laj6ww6.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const authRoutes = require('./routes/auth.cjs');
app.use('/api/auth', authRoutes);
// Modify the /api/shoes route to include user's favorites
app.get('/api/shoes', async (req, res) => {
  try {
    const username = req.query.username; // Get the username from the request

    // Fetch the user's favorites from MongoDB based on their username
    const user = await User.findOne({ username });
    const userFavorites = user ? user.favorites : [];
    const userOrders = user ? user.inCart : [];

    // Fetch all shoes from the database
    const shoes = await Shoe.find();

    // Enrich the shoe data with isFav based on whether each shoe is in the user's favorites
    const enrichedShoes = shoes.map((shoe) => ({
      ...shoe.toObject(),
      isFav: userFavorites.includes(shoe._id.toString()), // Check if shoe._id is in favorites
      isCart: userOrders.includes(shoe._id.toString()),
    }));

    res.json(enrichedShoes);
  } catch (error) {
    console.error('Error fetching shoe data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch a single shoe by ID
app.get('/api/shoes/:id', async (req, res) => {
  try {
    const shoeId = req.params.id;
    const username = req.query.username; // Get the username from the request

    // Fetch the shoe by ID
    const shoe = await Shoe.findById(shoeId);

    if (!shoe) {
      return res.status(404).json({ error: 'Shoe not found' });
    }

    // Fetch the user's favorites from MongoDB based on their username
    const user = await User.findOne({ username });
    const userFavorites = user ? user.favorites : [];
    const userOrders = user ? user.inCart : [];

    // Check if the shoe ID is in the user's favorites
    const isFav = userFavorites.includes(shoeId.toString());

    const isCart = userOrders.includes(shoeId.toString());

    // Create an enriched shoe object with isFav property
    const enrichedShoe = {
      ...shoe.toObject(),
      isFav,
      isCart
    };

    res.json(enrichedShoe);
  } catch (error) {
    console.error('Error fetching shoe details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  // API route to add a shoe ID to a user's favorites
  app.post("/api/add-to-favorites", async (req, res) => {
    const { username, shoeId } = req.body;
  
    try {
      // Find the user by their username
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // Check if the shoe ID is already in the favorites array
      const shoeIndex = user.favorites.indexOf(shoeId);
  
      if (shoeIndex !== -1) {
        // If the shoe is already a favorite, remove it
        user.favorites.splice(shoeIndex, 1);
      } else {
        // If the shoe is not a favorite, add it
        user.favorites.push(shoeId);
      }
  
      await user.save();
  
      return res.json({ success: true, message: "Shoe status updated in favorites" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  });

  //api to add shoe in cart
  app.post("/api/add-to-cart", async (req, res) => {
    const { username, shoeId } = req.body;
  
    try {
      // Find the user by their username
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // Check if the shoe ID is already in the favorites array
      const shoeIndex = user.inCart.indexOf(shoeId);
  
      if (shoeIndex !== -1) {
        // If the shoe is already a favorite, remove it
        user.inCart.splice(shoeIndex, 1);
      } else {
        // If the shoe is not a favorite, add it
        user.inCart.push(shoeId);
      }
  
      await user.save();
  
      return res.json({ success: true, message: "Shoe status updated in favorites" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  });

  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
