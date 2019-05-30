import styled from 'styled-components';

const TitleContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;

  @media (max-width: 776px) {
    width: 35%;
  }

  @media (max-width: 444px) {
    width: 45%;
  }

  @media (max-width: 347px) {
    width: 50%;
  }
`;

export default TitleContainer;
