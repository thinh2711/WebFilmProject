document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = e.target[0].value;
  const password = e.target[1].value;

  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert('Đăng nhập thành công');
      // Chuyển hướng tới trang chính
      window.location.href = '/movie.html';
    } else {
      alert(data || 'Đăng nhập thất bại');
    }
  } catch (err) {
    alert('Lỗi kết nối máy chủ');
  }
}); 