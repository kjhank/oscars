import styled from 'styled-components';

export const Score = styled.p`
  color:
    ${({
    $isHighest,
    theme,
  }) => ($isHighest ? '#fff' : theme.colors.accent)};
  font-weight: 700;
  font-size: 5rem;
  text-align: center;
`;
