const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/token', auth, userCtrl.checkToken);

router.delete('/deleteAccount', auth, userCtrl.deleteAccount);

module.exports = router;