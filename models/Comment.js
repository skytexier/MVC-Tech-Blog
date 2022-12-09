const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');
const moment = require('moment');
class Comment extends Model {
    // static association({User}){
    //     this.belongsTo(User, {foriegnKey: 'userId', as: 'user'})
    // }
}

Comment.init(
    {
       id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       },
       comment_body: {
        type: DataTypes.CHAR(250),
        allowNull: true,
       },
       user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }},
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            },
        },
       posted_time: {
        type: DataTypes.STRING,
        defaultValue: moment().format('MMMM Do YYYY, h:mm a'),
        allowNull: true,
       },
    },
    {
        sequelize,
        timestamps: true,
        createdAt: true,
        underscored: true,
        modelName: 'comment',
    }
)

module.exports = Comment;