import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Admin,
  Movies,
  Nominations,
  Results,
  Votes,
} from '@containers';

export const Main = ({
  getData,
  getNominations,
  userId,
  userRole,
}) => (
  <Switch>
    <Route path="/nominations">
      <Nominations getNominations={getNominations} />
    </Route>
    <Route path="/voting">
      <Votes
        getNominations={getNominations}
        userId={userId}
      />
    </Route>
    <Route path="/results">
      <Results />
    </Route>
    {userRole === 'admin' && (
      <Route path="/admin">
        <Admin getNominations={getNominations} />
      </Route>
    )}
    <Route path="/">
      <Movies getData={getData} />
    </Route>
  </Switch>
);

Main.propTypes = {
  getData: PropTypes.func.isRequired,
  getNominations: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  userRole: PropTypes.string.isRequired,
};

