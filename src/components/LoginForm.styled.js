import styled from 'styled-components';

import { mediaQueries } from '@utils/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  box-shadow: 0 5px 10px rgba(128, 128, 128, 0.5);
  margin: auto;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.regular};

  ${mediaQueries.l} {
    padding: ${({ theme }) => theme.spacing.double};
  }
`;

export const Input = styled.input`
  display: flex;
  justify-content: space-between;
  width: 70%;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.spacing.regular};
  padding:
    ${({
    theme,
    type,
  }) => (type === 'email' ? `${theme.spacing.regular} 10% ${theme.spacing.regular} ${theme.spacing.regular}` : theme.spacing.regular)};
  /* padding-right: ${({ type }) => type !== 'email' && '10%'}; */
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex: 1 0 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PasswordToggle = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 10%;
  border-top-right-radius: ${({ theme }) => theme.spacing.regular};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.regular};
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  width: 100%;
  box-shadow: 0 5px 10px rgba(128, 128, 128, 0.5);
  margin: auto;
  border-radius: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.double};
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;

  ${mediaQueries.s} {
    width: 50%;
  }

  ${mediaQueries.xl} {
    padding: ${({ theme }) => theme.spacing.regular};
  }
`;
