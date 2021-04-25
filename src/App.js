import React, {
  useEffect,
  useState,
} from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  checkHealth,
  getData,
  getNominations,
  handleLogin,
} from '@api';

import {
  ErrorText,
  LoginForm,
  Navigation,
  NavigationToggle,
} from '@components';

import {
  Container,
  MainHeading,
} from '@components/common.styled';

import { Main } from '@containers';

import {
  GlobalStyle,
  Theme,
} from '@utils/styled';

const queryClient = new QueryClient();

const App = () => {
  const [
    isLoggedIn,
    setLoggedIn,
  ] = useState(false);

  const [
    formData,
    setFormData,
  ] = useState({
    email: '',
    password: '',
  });

  const [
    errorText,
    setErrorText,
  ] = useState(null);

  const [
    isNavOpen,
    setNavOpen,
  ] = useState(true);

  const [
    userRole,
    setUserRole,
  ] = useState(null);

  const [
    userId,
    setUserId,
  ] = useState(null);

  useEffect(() => {
    checkHealth(setErrorText, setLoggedIn, setUserRole, setUserId);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <GlobalStyle />
        <Container>
          <MainHeading>Oscars</MainHeading>
          <Router>
            {errorText && <ErrorText>{errorText}</ErrorText>}
            {isLoggedIn ?
              (
                <>
                  <NavigationToggle
                    isNavOpen={isNavOpen}
                    setNavOpen={setNavOpen}
                  />
                  <Navigation
                    isNavOpen={isNavOpen}
                    setNavOpen={setNavOpen}
                    userRole={userRole}
                  />
                  <Main
                    getData={getData}
                    getNominations={getNominations}
                    userId={userId}
                    userRole={userRole}
                  />
                </>
              ) :
              (
                <LoginForm
                  formData={formData}
                  handleLogin={handleLogin}
                  setErrorText={setErrorText}
                  setFormData={setFormData}
                  setLoggedIn={setLoggedIn}
                  setUserId={setUserId}
                  setUserRole={setUserRole}
                />
              )
            }
          </Router>
        </Container>
      </Theme>
    </QueryClientProvider>
  );
};

export default App;
