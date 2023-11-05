const express = require("express");
const router = express.Router();
const cors = require("cors");

const bills = require("../controller/showbills")
const billById = require("../controller/showByID")

router.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  router.get("/billDetails", bills);
  router.get("/billDetails/:id", billById);

  module.exports = router