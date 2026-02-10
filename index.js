


    // "start": "nodemon index.js"


    // "start": "node index.js",
    //  "dev": "nodemon index.js"
// https://cloud.mongodb.com/v2/69174dafe7ce87484f328a3f#/metrics/replicaSet/69174ed97aa26f33bdfdcf55/explorer/schoolDB/users/find
// div multi line in react
// design ui/ux add event web 
// https://www.w3schools.com/css/css_image_transparency.asp
// https://dashboard.render.com/
// This is how you "create" data in MongoDB through a React app.
//React sends a POST request.
// Express receives it and uses Mongoose to create in MongoDB.
// https://cloud.mongodb.com/v2/69174dafe7ce87484f328a3f#/explorer/69174df495eaf35c70234139





// import dotenv from "dotenv";


const express = require('express')
// const mongoose = require('mongoose')
const cors = require("cors")
// const bodyParser = require("body-parser");
//  const bcrypt = require("bcrypt");
 

// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');
// import path from "path";
 

// event activities 
// const EventModel = require('./models/event.js')
// const ServiceModel = require('./models/service.js')

// const ContactModel = require('./models/contact.js')
// const User = require('./models/User.js')
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3001;
// const PORT = process.env.PORT;
// const PORT = 3001;
const app = express()

dotenv.config();
app.use(express.json())

// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true, limit: "10mb" }));
// app.use(cors({
//   origin: "https://school-f.vercel.app",
//   methods: "GET,POST,PUT,DELETE,OPTIONS",
//   allowedHeaders: "Content-Type, Authorization"
// }));

// const allowedOrigins = [
//   process.env.FRONTEND_URL_LOCAL,
//   process.env.FRONTEND_URL_PROD
// ];
app.use(cors());

// const allowedOrigins = [
//   process.env.FRONTEND_URL_LOCAL,
//   process.env.FRONTEND_URL_PROD
// ];

// app.use(cors({
//   origin: allowedOrigins,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// }));

// app.use(bodyParser.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // serve uploaded files
// const __dirname = path.resolve();

// mongoose.connect('mongodb://127.0.0.1:27017/associationDB')
//  const URL = process.env.MONGODB_URL;
// mongoose.connect(URL)
// .then(() => console.log("✅ MongoDB connected"))
//   .catch(err => console.log("❌ MongoDB error:", err.message));
// const URL = "mongodb://127.0.0.1:27017/school"
//  const URL = process.env.MONGODB_URL;
// //  {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // }
// mongoose.connect(URL)
// .then(() => console.log("✅ Connected to MongoDB successfully"))
// .catch(err => console.error("❌ MongoDB connection error:", err));







//  Ensure uploads folder exists



app.delete("/services/:id", async (req, res) => {
  try {
    await ServiceModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});



app.get("/req", (req, res) => {
  res.send("Backend is working success. ✅");
});


app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)

})


// if (process.env.NODE_ENV !== "production") {
//   app.listen(PORT, () => console.log("Local server running"));
// }

// module.exports = app;
