const Bill = require("../models/Bill")

const billView = async (req, res) => {
    try {
      const bill = await Bill.find();
      res.json(bill);
      console.log(res)
    } catch (error) {
        
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

  module.exports = billView