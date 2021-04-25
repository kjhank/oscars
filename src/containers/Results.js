/* eslint-disable no-unused-vars */ // TODO: out
import React, {
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';

import { getResults } from '@api';

import { Score } from '@components/Results.styled';
import {
  DataGrid,
  SingleItem,
  SubHeading,
} from '@components/common.styled';

export const Results = () => {
  const [
    data,
    setData,
  ] = useState([]);

  const [
    resultsByUser,
    setResultsByUser,
  ] = useState({});

  const [
    highestScore,
    setHighestScore,
  ] = useState(0);

  const {
    // isError,
    isLoading,
    isSuccess,
    // error,
    data: results,
  } = useQuery('results', getResults);

  const calculateResults = (winners, userVotes, users) => {
    const parsedResults = {};

    users.forEach(user => {
      parsedResults[user.id] = {
        name: users.find(item => item.id === user.id).name,
        score: 0,
      };
    });

    userVotes.forEach(item => {
      const parsedVotes = JSON.parse(item.votes);

      Object.keys(parsedVotes).forEach(categoryId => {
        const winner = winners[categoryId];

        if (parsedVotes[categoryId] === winner) {
          parsedResults[item.userid].score += 1;
        }
      });
    });

    return parsedResults;
  };

  useEffect(() => {
    setData(results);
  }, [isSuccess]);

  useEffect(() => {
    if (!!data && !!Object.keys(data).length > 0 && data.results) {
      const parsedResults = JSON.parse(data.results);

      setResultsByUser(calculateResults(parsedResults, data.votes, data.users));
    }
  }, [data]);

  useEffect(() => {
    setHighestScore(Math.max(...Object.keys(resultsByUser).map(key => resultsByUser[key].score)));
  }, [
    data,
    resultsByUser,
  ]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (Object.keys(resultsByUser).length > 0) {
    return (
      <DataGrid columns={2}>
        {Object.keys(resultsByUser).map(userId => (
          <SingleItem
            $isHighlighted={highestScore === resultsByUser[userId].score}
            key={userId}
          >
            <SubHeading
              centered
              $isHighlighted={highestScore === resultsByUser[userId].score}
            >
              {resultsByUser[userId].name}
            </SubHeading>
            <Score $isHighest={highestScore === resultsByUser[userId].score}>
              {resultsByUser[userId].score}
            </Score>
          </SingleItem>
        ))}
      </DataGrid>
    );
  }

  return <SubHeading>No results yet</SubHeading>;
};
