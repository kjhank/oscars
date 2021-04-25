import styled from 'styled-components';

import { mediaQueries } from '@utils/styled';

export const NavigationToggle = styled.button.attrs({ type: 'button' })`
  position: fixed;
  top: 2vw;
  right: 2vw;
  z-index: 3;
  border: 1px solid #000;
  border-radius: 2vw;
  padding: 2vw;
  background-color: #fff;
  white-space: break-spaces;

  ${mediaQueries.l} {
    display: none;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  ${mediaQueries.xl} {
    max-width: 1440px;
  }
`;

export const DataGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5vw;
  margin-bottom: 25%;

  ${mediaQueries.s} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.l} {
    grid-template-columns: ${({ columns = 3 }) => `repeat(${columns}, 1fr)`};
  }
`;

export const MainHeading = styled.h1`
  padding: 2rem;
  font-size: 4rem;
  text-align: center;
`;

export const Heading = styled.h2`
  margin-bottom: 5%;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2rem;
`;

export const VotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.regular};
  background-color:
    ${({
    $isSelected,
    theme,
  }) => ($isSelected ? theme.colors.accent : '#fff')};
  color:
    ${({
    $isSelected,
    theme,
  }) => ($isSelected ? '#fff' : theme.colors.accent)};
  transition: ${({ theme }) => `color ${theme.transitions.default}, background-color ${theme.transitions.default}`};

  & + & {
    margin-top: ${({ theme }) => theme.spacing.regular};
  }
`;

export const SingleItem = styled.li`
  box-shadow: 0 5px 10px rgba(128, 128, 128, 0.5);
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.regular};

  ${mediaQueries.l} {
    padding: ${({ theme }) => theme.spacing.double};
  }
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  appearance: none;
`;

export const VoteButton = styled.button.attrs({ type: 'button' })`
  position: fixed;
  bottom: 5%;
  left: 50%;
  width: 80%;
  box-shadow: 0 5px 10px rgba(128, 128, 128, 0.5);
  border-radius: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.double};
  background-color: ${({ theme }) => theme.colors.accent};
  color: #fff;
  transform: translateX(-50%);

  ${mediaQueries.s} {
    width: 50%;
  }

  ${mediaQueries.xl} {
    padding: ${({ theme }) => theme.spacing.regular};
  }
`;

export const SubHeading = styled.h3`
  margin-bottom: 5%;
  font-size: 1.5rem;
`;

export const SubList = styled.ul`
  padding-left: 1rem;
  list-style-type: none;
`;
