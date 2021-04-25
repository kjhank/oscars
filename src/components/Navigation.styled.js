import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { mediaQueries } from '@utils/styled';

export const Wrapper = styled.nav`
  position: fixed;
  top: 16vw;
  right: 0;
  z-index: 2;
  box-shadow: 0 5px 10px rgba(128, 128, 128, 0.5);
  border-bottom-left-radius: 2vw;
  border-top-left-radius: 2vw;
  padding: 4vw 0;
  background-color: #fff;
  transition: ${({ theme }) => theme.transitions.default};
  transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(100%)')};

  ${mediaQueries.l} {
    position: static;
    box-shadow: unset;
    padding: 0;
    transform: unset;
  }
`;

export const List = styled.ul`
  ${mediaQueries.l} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  margin: 2vw 0;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 4vw;
  background-color:
    ${({
    $isCurrent,
    theme,
  }) => ($isCurrent ? theme.colors.accent : '#fff')};
  color:
    ${({
    $isCurrent,
    theme,
  }) => ($isCurrent ? '#fff' : theme.colors.accent)};
  transition: ${({ theme }) => `color ${theme.transitions.default}, background-color ${theme.transitions.default}, border ${theme.transitions.default}`};

  ${mediaQueries.l} {
    border-bottom:
      4px solid ${({
    $isCurrent,
    theme,
  }) => ($isCurrent ? theme.colors.accent : '#fff')};
    padding: ${({ theme }) => theme.spacing.double};
    background: #fff;
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  }
`;

export const LogoutButton = styled(StyledLink)``;

Wrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
