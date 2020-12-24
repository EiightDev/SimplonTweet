const User = require("./user");
const Post = require("./post");
const Follow = require("./follow");

User.hasOne(Post, { as: "owner" });

// User.hasOne(Follow, {as:'isFollowed'})
// User.hasOne(Follow, {as:'whoFollowed'})

User.belongsToMany(User, { through: Follow, foreignKey: "id_user", as: "whoFollowed"});
User.belongsToMany(User, { through: Follow, foreignKey: "id_user", as: "isFollowed" });

exports.User = User;
exports.Post = Post;
exports.Follow = Follow;
