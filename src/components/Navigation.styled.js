import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Wrapper = styled.nav`
  position: fixed;
  top: 16vw;
  right: 0;
  z-index: 2;
  box-shadow: 0 5px 10px rgba(128, 128, 128, 0.5);
  border-bottom-left-radius: 2vw;
  border-top-left-radius: 2vw;
  padding: 4vw;
  background-color: #fff;
  transition: ${({ theme }) => theme.transitions.default};
  transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(100%)')};
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  margin: 2vw 0;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin: 2vw 0;
  padding: 2vw 0;
  color: #234669;
`;

Wrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
