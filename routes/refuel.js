const express = require('express');
const router = express.Router();

const refuelCtrl = require('../controllers/refuel');

router.get('/test', refuelCtrl.test);
// router.post('/create', refuelCtrl.create);
// router.update('/read', refuelCtrl.signup);
// router.update('/update', refuelCtrl.signup);
// router.post('/delete', refuelCtrl.signup);

module.exports = router;