const { User } = require('../models');

const  testUser =  [
    {
       id: 1,
       username: "skysexier",
       user_avatar: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg",
       email: "skyhamilton@gmail.com",
       password: "yobroski",
    },
    {
        id: 2,
        username: "braxton",
        user_avatar: "https://media.springernature.com/relative-r300-703_m1050/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
        email: "bracky@gmail.com",
        password: "braxdog",
     },
];

const seedUsers = () => User.bulkCreate(testUser);

module.exports = seedUsers;