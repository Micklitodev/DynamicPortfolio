const { Review } = require("../models");

const reviewData = [
  {
    user_id: 1,
    user_name: "SampleSeed",
    rating: 5,
    content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam."`,
  },
];

const reviewSeeds = () => Review.bulkCreate(reviewData);

module.exports = reviewSeeds;
