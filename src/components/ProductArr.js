import Images from "../images/Images";

export const productsArr1 = [
  {
    id: "p1",
    title: "Headphones",

    price: 100,
  },

  {
    id: "p2",
    title: "iPhone",

    price: 50,
  },

  {
    id: "p3",
    title: "Refrigerator",

    price: 70,
  },

  {
    id: "p4",
    title: "Horse Painting",

    price: 100,
  },
];
const productsArr = [
  {
    id: "p1",
    title: "Headphones",
    imagesArray: [Images.p11, Images.p12, Images.p13, Images.p14],

    price: 100,
  },

  {
    id: "p2",
    title: "iPhone",
    imagesArray: [Images.p21, Images.p22, Images.p23, Images.p24],

    price: 50,
  },

  {
    id: "p3",
    title: "Refrigerator",
    imagesArray: [Images.p31, Images.p32, Images.p33, Images.p34],

    price: 70,
  },

  {
    id: "p4",
    title: "Horse Painting",
    imagesArray: [Images.p41, Images.p42, Images.p43, Images.p44],

    price: 100,
  },
];

export default productsArr;
