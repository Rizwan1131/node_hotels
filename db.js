// this file is responsible for establised connection between node.js application and your MongoDB database useing The Mongoose Libary


const mongoose = require('mongoose');
require('dotenv').config();


// define the mangoDB conection URL

// const mongoURL = 'mongodb://127.0.0.1:27017/hotels' //replace "hotels" with your database name

    const mongoURL = process.env.MONGODB_URL
// set up MongoDB connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("connected to mongoDb server")
})

db.on('error', (error)=>{
    console.log("connected to mongoDb erroe" ,error)
})

db.on('disconnected', ()=>{
    console.log("connected to mongoDb disconnected")
})



// Export the database connection 

module.exports = db;