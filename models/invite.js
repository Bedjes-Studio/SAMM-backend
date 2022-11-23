const mongoose = require('mongoose');

const specsSchema = mongoose.Schema({
    ownerId: { type: String, required: true },
    guestId: { type: String, required: true },
    carId: { type: String, required: true },
});

module.exports = mongoose.model('Invite', specsSchema);