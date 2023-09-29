import mongoose from 'mongoose';
import Shoe from '../models/Shoe.cjs'

const cardData = [
  {
    title: "Nike Air",
    discount: "180.00",
    price: "239.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe10-removebg-preview.png?alt=media&token=de08dcf1-787d-448f-a31d-fd9d01376490",
    bg: "bg-[#f7c9a9]",
    isNew: true,
    isHot: false,
  },
  {
    title: "Nike Boost",
    discount: "150.00",
    price: "199.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe4-removebg-preview.png?alt=media&token=f193012a-e61d-4722-8376-0f12e39be5e5",
    bg: "bg-[#a9f7d5]",
    isNew: true,
    isHot: true,
  },
  {
    title: "Nike Classic",
    discount: "120.00",
    price: "149.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe5-removebg-preview.png?alt=media&token=b384f612-8e4d-4e25-b776-170d1afb2c26",
    bg: "bg-[#f7a9e2]",
    isNew: false,
    isHot: false,
  },
  {
    title: "Nike Runner",
    discount: "100.00",
    price: "129.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe6-removebg-preview.png?alt=media&token=29f50ea0-faf4-41ef-b00f-968130995f0d",
    bg: "bg-[#f7e0a9]",
    isNew: false,
    isHot: true,
  },
  {
    title: "Nike All-Star",
    discount: "90.00",
    price: "119.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe7-removebg-preview.png?alt=media&token=575824cf-f17d-46b9-8a26-aedbcf360d20",
    bg: "bg-[#a9f7f4]",
    isNew: true,
    isHot: false,
  },
  {
    title: "Nike 990",
    discount: "200.00",
    price: "259.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe8-removebg-preview.png?alt=media&token=b16b0e03-d09c-455e-921d-239409106018",
    bg: "bg-[#f7a9c9]",
    isNew: false,
    isHot: true,
  },
  {
    title: "Nike Authentic",
    discount: "80.00",
    price: "99.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe9-removebg-preview.png?alt=media&token=951e72db-407a-4115-a2b5-2a9847105a3c",
    bg: "bg-[#f7f1a9]",
    isNew: false,
    isHot: false,
  },
  {
    title: "Nike HOVR",
    discount: "160.00",
    price: "209.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe1-transformed.png?alt=media&token=71c56b31-161c-4dfe-96cb-8f04bee770f9",
    bg: "bg-[#a9e7f7]",
    isNew: true,
    isHot: true,
  },
];
  mongoose.connect('mongodb+srv://varadpatil:Master123@cluster01.laj6ww6.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Insert the cardData array into the Shoe collection
    Shoe.insertMany(cardData)
      .then(() => {
        console.log('Data inserted successfully');
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
      })
      .finally(() => {
        // Close the MongoDB connection
        mongoose.connection.close();
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  