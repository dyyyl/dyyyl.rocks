import styled from 'styled-components';

const Main = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* overflow-y: scroll;
  -webkit-overflow-scrolling: touch; */
  overflow-y: visible;
  grid-area: main;

  @media (max-width: 1199px) {
    grid-column: 1 / 3;
    align-items: center;
  }

  @media (max-width: 610px) {
    align-items: inherit;
  }
`;

export default Main;
