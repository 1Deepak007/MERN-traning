// Input.js
import React from 'react';

const InputField = ({ value }) => {
  return (
    <input type="text" value={value} readOnly />
  );
};

export default InputField;