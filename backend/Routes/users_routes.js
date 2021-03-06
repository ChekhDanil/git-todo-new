
const express = require('express');
const Authentication = require('../Controllers/user_controller');
const router = express.Router();

router.post('/register', Authentication.register);
router.post('/login', Authentication.login);

module.exports = router;