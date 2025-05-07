const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (req, res) => {
  try {
    console.log("📥 Nhận request đăng ký:", req.body); // Log khi nhận request

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashed,
    });

    const user = await newUser.save();
    console.log("✅ Đăng ký thành công:", {
      username: user.username,
      email: user.email,
      _id: user._id
    }); // Log thông tin tài khoản mới

    res.status(201).json(user);
  } catch (err) {
    console.error("❌ Lỗi khi đăng ký:", err); // Log lỗi
    res.status(500).json({ message: "Đăng ký thất bại", error: err });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json('Tài khoản không tồn tại');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).json('Sai mật khẩu');

    res.status(200).json({ message: 'Đăng nhập thành công', user });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { registerUser, loginUser };
