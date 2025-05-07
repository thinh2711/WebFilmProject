// Route xử lí đăng ký, đăng nhập.

const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Route xử lý đăng ký
router.post('/register', registerUser);

// Route xử lý đăng nhập
router.post('/login', loginUser);

module.exports = router;
