const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const refuelCtrl = require('../controllers/refuel');

router.get('/test', refuelCtrl.test);
router.post('/create', auth, refuelCtrl.create);
// router.update('/read', refuelCtrl.signup);
// router.update('/update', refuelCtrl.signup);
router.delete('/delete', refuelCtrl.delete);

module.exports = router;