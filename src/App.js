import React, { useState } from 'react';
import validator from 'validator';
import './App.css';

const App = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage('Password is strong');
    } else {
      setErrorMessage('Password is not strong');
    }
  };

  return (
    <div>
      <h2>Check Password Strength in React</h2>
      <label>
        Enter Password:{' '}
        <input
          type="password"
          onChange={(e) => validate(e.target.value)}
        />
      </label>
      <br />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default App;
