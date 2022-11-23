const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    mileage: { type: Number, required: true },
    year: { type: Number, required: true },
    owner: { type: String, required: true },
    guests: { type: [String], required: true },
});

module.exports = mongoose.model('Car', carSchema);