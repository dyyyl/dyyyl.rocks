import styled from 'styled-components';

const Grid = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 8% 92%;
  grid-template-areas:
    "title header"
    "navigation main";

  @media (max-height: 535px) {
    grid-template-rows: 10% 90%;
  }

  @media (max-height: 385px) {
    grid-template-rows: 15% 85%;
  }

  @media (max-width: 1165px) {
    grid-template-columns: 30% 70%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 793px) {
    grid-template-columns: 30% 70%;
  }

  @media (max-width: 535px) {
    grid-template-columns: 40% 60%;
  }

  @media (max-width: 347px) {
    grid-template-columns: 50% 50%;
  }
`;

export default Grid;
