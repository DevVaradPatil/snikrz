import mongoose from 'mongoose';
import Shoe from '../models/Shoe.cjs'

const cardData = [
  {
    title: "Nike MC Trainer 2",
    discount: "180.00",
    price: "239.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe10-removebg-preview.png?alt=media&token=de08dcf1-787d-448f-a31d-fd9d01376490",
    bg: "bg-[#f7c9a9]",
    isNew: true,
    isHot: false,
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e540407-e244-47d2-9a56-6b147bf93bdb/mc-trainer-2-workout-shoes-WFVXbk.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee4a404-e9e3-45a6-904c-5eea0194c2e2/mc-trainer-2-workout-shoes-WFVXbk.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ee4a404-e9e3-45a6-904c-5eea0194c2e2/mc-trainer-2-workout-shoes-WFVXbk.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f8909bf-b807-4fdb-8646-0a6ee8305dd2/mc-trainer-2-workout-shoes-WFVXbk.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/528072fc-48e8-43ca-be21-de9a5aafeb75/mc-trainer-2-workout-shoes-WFVXbk.png"
    ]
  },
  {
    title: "Giannis Immortality 3 EP",
    discount: "150.00",
    price: "199.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe4-removebg-preview.png?alt=media&token=f193012a-e61d-4722-8376-0f12e39be5e5",
    bg: "bg-[#a9f7d5]",
    isNew: true,
    isHot: true,
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/21021f20-29c3-4c55-9db2-a955dbc44e64/giannis-immortality-3-ep-basketball-shoes-0dTCk5.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f3273dd-1d71-4f42-b3be-3668a28c90b8/giannis-immortality-3-ep-basketball-shoes-0dTCk5.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cc273b55-3e36-45ba-99c7-fe22ac726621/giannis-immortality-3-ep-basketball-shoes-0dTCk5.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/233f4f03-ae39-4ea7-8c8c-f475f6baaf6a/giannis-immortality-3-ep-basketball-shoes-0dTCk5.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f3d1212-2d4a-46db-a8da-f42d26240695/giannis-immortality-3-ep-basketball-shoes-0dTCk5.png"
    ]
  },
  {
    title: "Nike Waffle Debut",
    discount: "120.00",
    price: "149.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe5-removebg-preview.png?alt=media&token=b384f612-8e4d-4e25-b776-170d1afb2c26",
    bg: "bg-[#f7a9e2]",
    isNew: false,
    isHot: false,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/219f6ff8-2aa4-48e7-8f0a-b2ca074719be/waffle-debut-shoes-tZQrq6.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b143b6a8-51af-4d57-b247-64ba857bad91/waffle-debut-shoes-tZQrq6.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/74f5317e-3342-437e-8639-4bb7c3fd0cc4/waffle-debut-shoes-tZQrq6.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bd8279f4-3ea5-42c6-860c-c4ccacb1a237/waffle-debut-shoes-tZQrq6.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/733b3974-bf85-427b-a692-00901d736a1c/waffle-debut-shoes-tZQrq6.png"
    ]
  },
  {
    title: "Jordan One Take 4 PF",
    discount: "100.00",
    price: "129.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe6-removebg-preview.png?alt=media&token=29f50ea0-faf4-41ef-b00f-968130995f0d",
    bg: "bg-[#f7e0a9]",
    isNew: false,
    isHot: true,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/21127b0b-1be4-481d-85ba-5256ad18378f/jordan-one-take-4-pf-shoes-v5trdl.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9c9c37e7-bd69-4c47-9203-577bb8836bf0/jordan-one-take-4-pf-shoes-v5trdl.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33f67ecd-f91c-48bc-97ff-718f3ede64fc/jordan-one-take-4-pf-shoes-v5trdl.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/216c83c9-a8da-4a04-a23e-1c89a48a5145/jordan-one-take-4-pf-shoes-v5trdl.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6fbe7cc4-a5eb-4852-ae0b-7a3084f65911/jordan-one-take-4-pf-shoes-v5trdl.png"
    ]
  },
  {
    title: "Air Jordan 1 Retro High OG",
    discount: "90.00",
    price: "119.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe7-removebg-preview.png?alt=media&token=575824cf-f17d-46b9-8a26-aedbcf360d20",
    bg: "bg-[#a9f7f4]",
    isNew: true,
    isHot: false,
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/09c9186d-e28e-4e46-9535-e49f09ddfdd9/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b7d9e1fb-6119-4345-8efe-747dd6bffa6a/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a5eaef87-810b-4ceb-9d26-bbcfdb7894d6/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aadcf4bb-c4c6-4456-bb61-50e44fc0fa1d/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6c389fcd-8609-4632-8eee-0f3449652b68/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png"
    ]
  },
  {
    title: "Nike Air Max 97",
    discount: "200.00",
    price: "259.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe8-removebg-preview.png?alt=media&token=b16b0e03-d09c-455e-921d-239409106018",
    bg: "bg-[#f7a9c9]",
    isNew: false,
    isHot: true,
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/483dfbec-2a0a-47b2-b67f-aab7dc3f41ac/air-max-97-shoes-EBZrb8.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e3ea4b8-af01-49fb-a6a3-60c309db8358/air-max-97-shoes-EBZrb8.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84cf8c21-b5a3-4180-80cd-b641fdaa7efd/air-max-97-shoes-EBZrb8.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9b9a866-33d3-41c6-9d21-7265f2692eb1/air-max-97-shoes-EBZrb8.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5dd43cc4-bdb1-4ecc-b268-57a31c4e0a99/air-max-97-shoes-EBZrb8.png"
    ]
  },
  {
    title: "Jordan Nu Retro 1 Low",
    discount: "80.00",
    price: "99.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe9-removebg-preview.png?alt=media&token=951e72db-407a-4115-a2b5-2a9847105a3c",
    bg: "bg-[#f7f1a9]",
    isNew: false,
    isHot: false,
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0ea8b282-ea78-4025-8120-2d54e013b969/jordan-nu-retro-1-low-shoes-8294mJ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9a08f8e8-5ab2-4108-9012-89ea761dc2fc/jordan-nu-retro-1-low-shoes-8294mJ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a328bae0-9197-469d-9592-ef914fea9436/jordan-nu-retro-1-low-shoes-8294mJ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ae861bfb-2963-4afe-8a6a-29113a7ca3c8/jordan-nu-retro-1-low-shoes-8294mJ.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b4e6e4ac-4240-4a3c-b3f6-37ec8d3aaca8/jordan-nu-retro-1-low-shoes-8294mJ.png"
    ]
  },
  {
    title: "Nike Air Max AP",
    discount: "160.00",
    price: "209.00",
    img: "https://firebasestorage.googleapis.com/v0/b/plantnet-d209c.appspot.com/o/shoe%20images%2Fshoe1-transformed.png?alt=media&token=71c56b31-161c-4dfe-96cb-8f04bee770f9",
    bg: "bg-[#a9e7f7]",
    isNew: true,
    isHot: true,
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6ffb909e-8e78-45f2-9025-d1f511e111a7/air-max-ap-shoes-3Rdq04.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/595ef99a-4fce-42b2-a343-c22a8d585436/air-max-ap-shoes-3Rdq04.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10801ec6-3582-45f2-b6bd-9432a5483b8a/air-max-ap-shoes-3Rdq04.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/664bca2c-66c1-4393-b1fc-62d35d0deedb/air-max-ap-shoes-3Rdq04.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af64012d-e873-4e27-a3ae-6b4fe43b2374/air-max-ap-shoes-3Rdq04.png"
    ]
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

  