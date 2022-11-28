const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const eventCtrl = require('../controllers/event');

const refuelRoutes = require('./refuel');
const costRoutes = require('./cost');
const earningRoutes = require('./earning');

router.get('/getAll', auth, eventCtrl.getAll);
router.use('/refuel', refuelRoutes);
router.use('/cost', costRoutes);
router.use('/earning', earningRoutes);



module.exports = router;