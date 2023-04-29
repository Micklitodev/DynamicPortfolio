const User = require("./user");
const Review = require("./review");

Review.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Review };
