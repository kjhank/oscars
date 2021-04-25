import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  StyledLink as Link,
  List,
  ListItem,
  Wrapper,
} from './Navigation.styled';

const NAV_TIMEOUT_MS = 3000;

export const Navigation = ({
  isNavOpen,
  setNavOpen,
  userRole,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setNavOpen(false);
    }, NAV_TIMEOUT_MS);
  }, []);

  const links = {
    user: [
      {
        path: '/',
        text: 'Movies',
      },
      {
        path: '/nominations',
        text: 'Nominations',
      },
      {
        path: '/voting',
        text: 'Voting',
      },
      {
        path: '/results',
        text: 'Results',
      },
    ],
  };

  links.admin = [
    ...links.user,
    {
      path: '/admin',
      text: 'Admin',
    },
  ];

  return (
    <Wrapper isOpen={isNavOpen}>
      <List onClick={() => setNavOpen(false)}>
        {links[userRole].map(({
          text,
          path,
        }) => (
          <ListItem key={text}>
            <Link to={path}>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

Navigation.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired,
};