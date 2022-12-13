const { Post } = require('../models')

const postSeed = [
    {
      post_body: "Tech tip #410: make sure to turn off your power supply before touching your motherboard!",
      votes: '10',
      post_links: 'eZTS4cL4Euo',
      user_id: 1,
    },
    {
        post_body: 'I only use Linus Tech Tips for all of my tech information, but this site seems cool too!',
        votes: '15',
        post_links: 'G1IbRujko-A',
        user_id: 2,
    },
  ];

  const seedPost = () => Post.bulkCreate(postSeed);
  module.exports = seedPost;