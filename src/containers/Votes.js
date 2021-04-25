import React, {
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

import { postVotes } from '@api';

import { DataGrid } from '@components/common.styled';
import {
  Label,
  Radio,
  VoteButton,
} from '@components/Votes.styled';

export const Votes = ({
  getNominations,
  userId,
}) => {
  const [
    data,
    setData,
  ] = useState([]);

  const [
    votes,
    setVotes,
  ] = useState({});

  const {
    // isError,
    isLoading,
    isSuccess,
    // error,
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
      <form noValidate>
        <DataGrid>
          {data.map(({
            id,
            name,
            nominees,
            // slug,
          }) => (
            <li key={id}>
              <h2>{name}</h2>
              <p>Pick your vote:</p>
              {nominees.map(nominee => (
                <Label
                  isSelected={votes[id] === nominee.id}
                  key={JSON.stringify(nominee)}
                >
                  <Radio
                    name={name}
                    onChange={event => setVotes({
                      ...votes,
                      [id]: event.target.value,
                    })}
                    value={nominee.id}
                  />
                  {nominee.title}
                </Label>
              ))}
            </li>
          ))}
        </DataGrid>
        <VoteButton
          disabled={Object.keys(votes).length < 1}
          onClick={() => postVotes({
            userId,
            votes,
          })}
          type="button"
        >
          Vote!
        </VoteButton>
      </form>
    );
  }

  return <div>foo</div>;
};

Votes.propTypes = {
  getNominations: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};
