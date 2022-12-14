const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const costCtrl = require('../controllers/cost');

router.post('/create', auth, costCtrl.create);
router.post('/getSingle', auth, costCtrl.getSingle);
router.post('/getAll', auth, costCtrl.getAll);
router.put('/update', auth, costCtrl.update);
router.post('/delete', auth, costCtrl.delete);

module.exports = router;