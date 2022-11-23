const mongoose = require('mongoose');

const refuelSchema = mongoose.Schema({
    date: { type: Date, required: true },
    mileage: { type: Number, required: true },
    creatorId: { type: String, required: true },
    fuelType: { type: String, required: true },
    litterPrice: { type: Number, required: true },
    totalCost: { type: Number, required: true },
    litter: { type: Number, required: true },
});

module.exports = mongoose.model('Refuel', refuelSchema);