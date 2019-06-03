import styled from 'styled-components';

const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  grid-area: title;

  h1 {
    padding-right: 1.5%;
    a {
      font-weight: 900;
    }
  }
`;

export default TitleContainer;
