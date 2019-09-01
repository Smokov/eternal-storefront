import categories from "../data/categories";

const getCategories = () => {
  return categories;
};

const getProducts = () => {};

const getBannerImages = () => {
  return [
    {
      title: "banner 1",
      image: "banner-1.jpg",
      description: "this is the banner 1 description",
      path: ""
    },
    {
      title: "banner 2",
      image: "banner-2.jpg",
      description: "this is the banner 2 description",
      path: ""
    }
  ];
};

export default {
  getCategories,
  getProducts,
  getBannerImages
};
