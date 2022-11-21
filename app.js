const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());

mongoose.connect(config.mongodb.host + ":" + config.mongodb.port + "/" + config.mongodb.name,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB using port " + config.mongodb.port))
    .catch(() => console.log("Connection to MongoDB failed !"));

app.use('/api/user', userRoutes);

module.exports = app;