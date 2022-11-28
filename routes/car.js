const express = require('express');
const router = express.Router();

const carCtrl = require('../controllers/car');
const auth = require('../middleware/auth');

router.post('/create', auth, carCtrl.createCar);
router.post('/getSingle', auth, carCtrl.getSingle);
router.get('/getAll', auth, carCtrl.getAll);
router.put('/update', auth, carCtrl.update);
router.delete('/delete', auth, carCtrl.deleteCar);




module.exports = router;