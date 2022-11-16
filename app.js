const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

// const stuffRoutes = require('./routes/stuff');

const app = express();
app.use(express.json());

mongoose.connect(config.mongodb.host + ":" + config.mongodb.port + "/" + config.mongodb.name,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB using port " + config.mongodb.port))
    .catch(() => console.log("Connection to MongoDB failed !"));

// app.use('/api/stuff', stuffRoutes);

module.exports = app;