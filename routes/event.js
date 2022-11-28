const express = require('express');
const router = express.Router();

const refuelRoutes = require('./refuel');
const costRoutes = require('./cost');
const earningRoutes = require('./earning');



router.use('/refuel', refuelRoutes);
router.use('/cost', costRoutes);
router.use('/earning', earningRoutes);



module.exports = router;