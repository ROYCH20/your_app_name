import React, { useState } from 'react';
import '../CSS/LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправка формы
    console.log('Отправка формы:', { email, password });
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@email."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        <label htmlFor="password">Пароль</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="password-toggle-button"
            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            {showPassword ? '👁️' : '🙈'}
          </button>
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
