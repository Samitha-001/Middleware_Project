// const bill = require("../models/Post")

const billView = async (req, res) => {
    try {
      const bill = await Post.find();
      res.json(posts);
      console.log(posts)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred in viewing posts' });
    }
  };
  

  module.exports = "Whats up from controller"