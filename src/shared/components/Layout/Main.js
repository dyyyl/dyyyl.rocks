import styled from 'styled-components';

const Main = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  grid-area: main;

  @media (max-width: 1199px) {
    grid-column: 1 / 3;
  }

  @media (min-width: 610px) {
    align-items: center;
  }
`;

export default Main;
