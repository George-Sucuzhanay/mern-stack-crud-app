const moongoose = require("mongoose")
const express = require("express")
const { default: mongoose } = require("mongoose")

// connect to Mongo and create new DB
// mongodb+srv://m001-student:m001-mongodb-basics@sandbox.al2fi.mongodb.net/Database?retryWrites=true&w=majority"
// mongodb://127.0.0.1:27017/itemsDatabase

// node seed/items.js
// mongoose
// use itemsDatabase
// db.items.find()

let MONGODB_URL = process.env.PROD_MONGODB || process.env.MONGODB_URL || "YOUR DATABASE LINK"

mongoose.connect(MONGODB_URL, 
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Successfully connected to MongoDB")
    })
    .catch((e) => {
        console.error("Connection error", e.message)
    })

const db = mongoose.connection

module.exports = db

