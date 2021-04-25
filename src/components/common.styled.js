import styled from 'styled-components';
import { mediaQueries } from '@utils/styled';

export const NavigationToggle = styled.button.attrs({ type: 'button' })`
  position: fixed;
  top: 6vw;
  right: 2vw;
  z-index: 3;
  border: 1px solid #000;
  border-radius: 2vw;
  padding: 2vw;
  background-color: #fff;
  white-space: break-spaces;
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const DataGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5vw;

  ${mediaQueries.m} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.l} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const MainHeading = styled.h1`
  font-size: 4rem;
  text-align: center;
`;
