// src/components/subcomponent/InputField.jsx
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Field } from 'formik';

const InputField = ({ name, placeholder, type = 'text' }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form.Group controlId={`formBasic${name.charAt(0).toUpperCase() + name.slice(1)}`}>
      <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
      <div className="input-group">
        <Field name={name}>
          {({ field }) => (
            <Form.Control
              {...field}
              type={type === 'password' && showPassword ? 'text' : type}
              placeholder={placeholder}
              required
            />
          )}
        </Field>
        {type === 'password' && (
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        )}
      </div>
    </Form.Group>
  );
};

export default InputField;
