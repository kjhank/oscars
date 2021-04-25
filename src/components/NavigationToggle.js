import React from 'react';
import PropTypes from 'prop-types';

import { NavigationToggle as Button } from './common.styled';

export const NavigationToggle = ({
  isNavOpen,
  setNavOpen,
}) => (
  <Button onClick={() => setNavOpen(!isNavOpen)}>
    {isNavOpen ? 'close\nmenu' : 'open\nmenu'}
  </Button>
);

NavigationToggle.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
};
