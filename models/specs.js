const mongoose = require('mongoose');

const specsSchema = mongoose.Schema({
    maxSpeed: { type: Number, required: true },
    // many params
});

module.exports = mongoose.model('Specs', specsSchema);