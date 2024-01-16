const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/register', userCtrl.createUser );
router.post('/login', userCtrl.connectUser );

module.exports = router;