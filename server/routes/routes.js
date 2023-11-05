const express = require("express");
const router = express.Router();
const cors = require("cors");

const testRun = require("../controller/showbills")

router.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  router.get("/test", console.log("Hey I am in the server side"));

  module.exports = router