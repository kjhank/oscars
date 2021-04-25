import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useHistory,
  useLocation,
} from 'react-router';
import Cookies from 'js-cookie';

import {
  StyledLink as Link,
  List,
  ListItem,
  LogoutButton,
  Wrapper,
} from './Navigation.styled';

const NAV_TIMEOUT_MS = 3000;

export const Navigation = ({
  isNavOpen,
  setLoggedIn,
  setNavOpen,
  userRole,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setNavOpen(false);
    }, NAV_TIMEOUT_MS);
  }, []);

  const { pathname } = useLocation();
  const history = useHistory();

  const handleLogout = () => {
    Cookies.remove('accessToken');
    setLoggedIn(false);
    history.push('/');
  };

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
          <ListItem
            $isCurrent={path === pathname}
            key={text}
          >
            <Link
              $isCurrent={path === pathname}
              to={path}
            >
              {text}
            </Link>
          </ListItem>
        ))}
        <LogoutButton
          as="button"
          onClick={handleLogout}
        >
          Log out
        </LogoutButton>
      </List>
    </Wrapper>
  );
};

Navigation.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
  setNavOpen: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired,
};
