import React, { useState } from 'react';
import './FormComponent.css'; // Import the CSS file for this component

const FormComponent = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the submitted value (e.g., send it to a server)
    console.log('Submitted value:', inputValue);
    // Reset the input field after submission
    setInputValue('');
  };

  // Function to handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
        Enter Amount:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default FormComponent;
