import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: flex;
  flex: 0 0 70%;
  justify-content: space-between;
  padding-right: ${({ type }) => type !== 'email' && '10%'};
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex: 1 0 100%;
  justify-content: space-between;
`;

export const PasswordToggle = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 10%;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })``;
