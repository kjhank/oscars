import React, {
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

import { DataGrid } from '@components/common.styled';
import { SingleNomination } from '@components/Nominations.styled';

export const Nominations = ({ getNominations }) => {
  const [
    data,
    setData,
  ] = useState([]);

  const {
    isError,
    isLoading,
    isSuccess,
    error,
    data: nominations,
  } = useQuery('data', getNominations);

  useEffect(() => {
    if (isSuccess) {
      setData(nominations);
    }
  }, [isSuccess]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (data.length > 0) {
    return (
      <DataGrid>
        {data.map(({
          id,
          name,
          nominees,
          slug,
        }) => (
          <SingleNomination key={id}>
            <h2>{name}</h2>
            <p>Nominees:</p>
            <ul>
              {nominees.map(nominee => (
                <li key={`${id}-${nominee.id}`}>
                  <h3>
                    {nominee.title}
                    {' '}
                    {nominee.person && nominee.person[slug] && ` - ${nominee.person[slug][0]}`}
                  </h3>
                </li>
              ))}
            </ul>
          </SingleNomination>
        ))}
      </DataGrid>
    );
  }

  if (isError) {
    const { message: errorMessage } = error.toJSON();

    return <div>{errorMessage}</div>;
  }

  return <div>foo</div>;
};

Nominations.propTypes = {
  getNominations: PropTypes.func.isRequired,
};
