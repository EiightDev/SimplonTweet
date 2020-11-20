const User = require('./user');
const Post = require('./post');
const Follow = require("./follow");

User.hasMany(Post);
Post.belongsTo(User, {foreignKey: 'userIdUsers'});

exports.User = User;
exports.Post = Post;
exports.Follow = Follow;