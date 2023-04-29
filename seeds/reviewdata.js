const { Review } = require("../models");

const reviewData = [
  {
    user_id: 1,
    user_name: "FrankTheTank",
    rating: 5,
    content:
      "Michael is an excellent web developer. He took the time to understand my business needs and delivered a website that is both functional and visually appealing. He is a pleasure to work with and I would recommend him to anyone looking for top-quality web development services.",
  },
  {
    user_id: 2,
    user_name: "JimBob",
    rating: 5,
    content:
      "Michael is an excellent web developer. He took the time to understand my business needs and delivered a website that is both functional and visually appealing. He is a pleasure to work with and I would recommend him to anyone looking for top-quality web development services.",
  },
];

const reviewSeeds = () => Review.bulkCreate(reviewData);

module.exports = reviewSeeds;
