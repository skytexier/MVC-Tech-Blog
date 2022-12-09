const User = require('./user');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',

})

Post.belongsTo(User, {
    foreignKey: 'user_id',
})

Comment.belongsTo(Post, {
    foreignKey: 'id',
} )

module.exports = { User, Post, Comment };