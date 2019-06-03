import styled from 'styled-components';

const Grid = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 8% 92%;
  grid-template-areas:
    "title header"
    "navigation main";

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
