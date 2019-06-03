import styled from 'styled-components';

const NavigationContainer = styled.nav`
  border-right: 1px solid black;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

  grid-area: navigation;
`;

export default NavigationContainer;
