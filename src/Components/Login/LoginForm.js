// components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin, isLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra email và mật khẩu có được nhập hay không
    if (!email || !password) {
      setError('Vui lòng nhập email và mật khẩu.');
      return;
    }

    // Gọi hàm onLogin để xác thực đăng nhập
    onLogin(email, password);

    // Nếu đăng nhập thành công (isLoggedIn), điều hướng sang trang chủ
    if (isLoggedIn) {
      navigate('/home'); // Điều hướng sang trang chủ
    } else {
      setError('Đăng nhập không thành công, vui lòng thử lại.');
    }
  };

  return (
    <div style={{ width: '300px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Đăng nhập</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none' }}>
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
