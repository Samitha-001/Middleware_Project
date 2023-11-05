const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");

const app = express()



const corsOptions = {
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  
  // Set CORS headers
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Change this to the actual origin of your client
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.use("/", require("./routes/routes"));

  // database connection
mongoose
.connect("mongodb+srv://rathnayakesamitha0101:FkzLKQIhJ568PAuM@cluster0.xeelrrz.mongodb.net/")
.then(() => console.log("database connected"))
.catch((err) => console.log("database not connected ", err));

app.listen(9000, ()=>{console.log("Hey this is web portal in 9000")})