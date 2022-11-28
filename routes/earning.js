const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const earningCtrl = require('../controllers/earning');

router.post('/create', auth, earningCtrl.create);
router.post('/getSingle', auth, earningCtrl.getSingle);
router.get('/getAll', auth, earningCtrl.getAll);
router.put('/update', auth, earningCtrl.update);
router.delete('/delete', auth, earningCtrl.delete);

module.exports = router;