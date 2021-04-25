import React, {
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';

import { getResults } from '@api';

import { DataGrid } from '@components/common.styled';

export const Results = () => {
  const [
    data,
    setData,
  ] = useState([]);

  const {
    // isError,
    isLoading,
    isSuccess,
    // error,
    data: results,
  } = useQuery('results', getResults);

  useEffect(() => {
    setData(results);
  }, [isSuccess]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const calculateResults = (winners, userVotes) => {
    let score = 0;

    Object.keys(winners).forEach(categoryId => {
      const winner = winners[categoryId];
      const userVote = userVotes[categoryId];

      // console.log(winner, userVote);

      if (winner === userVote) {
        score += 1;
      }
    });

    return score;
  };

  if (!!data && !!Object.keys(data).length > 0) {
    // calculateResults(JSON.parse(data.results), JSON.parse(data.votes[0].votes));
    data.votes.forEach(votes => {
      console.log('user', votes.userid);
      console.log('result', calculateResults(JSON.parse(data.results), JSON.parse(votes.votes)));
    });

    return (
      <DataGrid columns={2}>bar</DataGrid>
    );
  }

  return <>foo</>;
};
