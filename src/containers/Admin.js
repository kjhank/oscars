import React, {
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

import { postResults } from '@api';

import {
  DataGrid,
  Heading,
  Label,
  Radio,
  SingleItem,
  VoteButton,
  VotesWrapper,
} from '@components/common.styled';

export const Admin = ({ getNominations }) => {
  const [
    data,
    setData,
  ] = useState([]);

  const [
    results,
    setResults,
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
            <SingleItem key={id}>
              <Heading>{name}</Heading>
              <p>Winner:</p>
              <VotesWrapper>
                {nominees.map(nominee => (
                  <Label
                    $isSelected={results[id] === nominee.id}
                    key={JSON.stringify(nominee)}
                  >
                    <Radio
                      name={name}
                      onChange={event => setResults({
                        ...results,
                        [id]: event.target.value,
                      })}
                      value={nominee.id}
                    />
                    {nominee.title}
                  </Label>
                ))}
              </VotesWrapper>
            </SingleItem>
          ))}
        </DataGrid>
        <VoteButton
          disabled={Object.keys(results).length < 1}
          onClick={() => postResults({ results })}
          type="button"
        >
          Vote!
        </VoteButton>
      </form>
    );
  }

  return <div>foo</div>;
};

Admin.propTypes = {
  getNominations: PropTypes.func.isRequired,
};
