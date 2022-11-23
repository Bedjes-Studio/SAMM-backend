const express = require('express');
const router = express.Router();

const refuelRoutes = require('./refuel');

router.use('/refuel', refuelRoutes);

module.exports = router;