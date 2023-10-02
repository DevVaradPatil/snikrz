const mongoose = require('mongoose');

// Define the shoe schema
const shoeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  discount: { type: Number, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  bg: { type: String, required: true },
  isNew: { type: Boolean, required: true },
  isHot: { type: Boolean, required: true },
  images: [
    {
      type: String
    }
  ],
  payment: {type: String},
});

// Create a model based on the schema
const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
