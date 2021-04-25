import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

import {
  Form,
  Input,
  Label,
  PasswordToggle,
  SubmitButton,
} from './LoginForm.styled';

export const LoginForm = ({
  formData,
  handleLogin,
  setErrorText,
  setFormData,
  setLoggedIn,
  setUserId,
  setUserRole,
}) => {
  const [
    isPassword,
    setIsPassword,
  ] = useState(true);

  const togglePassword = event => {
    event.preventDefault();
    setIsPassword(!isPassword);
  };

  return (
    <Form noValidate>
      <Label>
        e-mail
        <Input
          name="email"
          value={formData.email}
          onChange={event => setFormData({
            ...formData,
            email: event.target.value,
          })}
          type="email"
        />
      </Label>
      <br />
      <Label>
        password
        <Input
          name="password"
          type={isPassword ? 'password' : 'text'}
          value={formData.password}
          onChange={event => setFormData({
            ...formData,
            password: event.target.value,
          })}
        />
        <PasswordToggle
          type="button"
          onClick={event => togglePassword(event)}
        >
          {isPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
        </PasswordToggle>
      </Label>
      <br />
      <SubmitButton
        // eslint-disable-next-line max-len
        onClick={event => handleLogin(event, formData, setErrorText, setLoggedIn, setUserRole, setUserId)}
      >
        Login
      </SubmitButton>
    </Form>
  );
};

LoginForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  handleLogin: PropTypes.func.isRequired,
  setErrorText: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
  setUserId: PropTypes.func.isRequired,
  setUserRole: PropTypes.func.isRequired,
};
