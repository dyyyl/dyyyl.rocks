import styled from 'styled-components';

const Main = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  grid-area: main;

  @media (max-width: 1199px) {
    grid-column: navigation / main;
  }
`;

export default Main;
