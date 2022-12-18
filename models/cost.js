const mongoose = require('mongoose');

const costSchema = mongoose.Schema({
    date: { type: Date, required: true },
    mileage: { type: Number, required: true },
    creatorId: { type: String, required: true },
    carId: { type: String, required: true },
    value: { type: Number, required: true },
    reason: { type: String, required: true },
    paymentMethod: { type: String, required: true },
});

module.exports = mongoose.model('Cost', costSchema);