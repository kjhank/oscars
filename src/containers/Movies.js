import React, {
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

import {
  SingleMovie,
} from '@components/Movies.styled';

import { DataGrid } from '@components/common.styled';

export const Movies = ({ getData }) => {
  const [
    data,
    setData,
  ] = useState([]);

  const {
    isError,
    isLoading,
    isSuccess,
    error,
    data: movies,
  } = useQuery('movies', getData);

  useEffect(() => {
    if (isSuccess) {
      setData(movies);
    }
  }, [isSuccess]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (data.length > 0) {
    return (
      <div>
        <DataGrid>
          {data.map(({
            id,
            nominations,
            title,
          }) => (
            <SingleMovie key={id}>
              {title}
              <ul>
                {nominations.map(({ name }) => <li key={name}>{name}</li>)}
              </ul>
            </SingleMovie>
          ))}
        </DataGrid>
      </div>
    );
  }

  if (isError) {
    const { message: errorMessage } = error.toJSON();

    return <div>{errorMessage}</div>;
  }

  return <div>foo</div>;
};

Movies.propTypes = {
  getData: PropTypes.func.isRequired,
};
