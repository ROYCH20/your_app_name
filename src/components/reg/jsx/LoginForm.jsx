import React, { useState } from 'react';
import '../CSS/LoginForm.css';

const LoginForm = ({ isVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка формы', { email, password });
  };

  return (
    <div className={`login-container ${isVisible ? 'visible' : ''}`}>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <div className="password-container">
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <span className="password-toggle">👁</span>
        </div>
        <button type="submit" className="login-button">
          Войти
          <span className="arrow">→</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
