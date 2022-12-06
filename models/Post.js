const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');
const moment = require('moment');
class Post extends Model {
    // static association({User}){
    //     this.belongsTo(User, {foriegnKey: 'userId', as: 'user'})
    // }
}

Post.init(
    {
       id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       },
       post_body: {
        type: DataTypes.CHAR(250),
        allowNull: false,
       },
       user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
       },
       posted_time: {
        type: DataTypes.STRING,
        defaultValue: moment().format('MMMM Do YYYY, h:mm a'),
        allowNull: true,
       },
       comments: {
        type: DataTypes.STRING,
        references: {
            model: 'comment',
            key: 'id'
        }
       }
    },
    {
        sequelize,
        timestamps: true,
        createdAt: true,
        underscored: true,
        modelName: 'post',
    }
)

module.exports = Post;