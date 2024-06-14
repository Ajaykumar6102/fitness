import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Code = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '12345') {
      navigate('/registeration');
    } else {
      setErrorMessage('Invalid code. Please try again.');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter code"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Code;
