const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    mileage: { type: Number, required: true },
    year: { type: Number, required: true },
    ownerId: { type: String, required: true },
    guestsId: { type: [String], required: true },
    fuelType: { type: String, required: true },
    fuelCapacity: { type: Number, required: true },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    name: { type: String, required: true },
    // TODO : add specs 
    // specsId: { type: String, required: true },
});

module.exports = mongoose.model('Car', carSchema);