const sequelize = require('../config/connection');
const seedUsers = require('./userSeed');
const seedPost = require('./postSeed');

const seedAll = async () => {
    await sequelize.sync({ force: false })
    await seedUsers();
    await seedPost();

    process.exit(0)
};

seedAll();