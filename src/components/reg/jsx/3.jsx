import React, { useState } from 'react';
import OpenFormButton from './OpenFormButton';
import LoginForm from './LoginForm';

const App = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="app">
      <OpenFormButton onClick={toggleForm} />
      <LoginForm isVisible={isFormVisible} />
    </div>
  );
};

export default App;
