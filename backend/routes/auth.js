// Route xử lí đăng ký, đăng nhập.

const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// Route xử lý đăng ký
router.post('/register', registerUser);

module.exports = router;
