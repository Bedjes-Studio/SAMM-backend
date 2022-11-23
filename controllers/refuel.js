// const User = require('../models/user');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const config = require('../config');


exports.test = (req, res, next) => {
    res.status(200).json({ "Test": "Ok" });
};