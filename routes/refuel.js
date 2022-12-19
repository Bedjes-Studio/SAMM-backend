const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const refuelCtrl = require('../controllers/refuel');

router.post('/create', auth, refuelCtrl.create);
router.post('/getSingle', auth, refuelCtrl.getSingle);
router.post('/getAll', auth, refuelCtrl.getAll);
router.put('/update', auth, refuelCtrl.update);
router.post('/delete', auth, refuelCtrl.delete);

module.exports = router;