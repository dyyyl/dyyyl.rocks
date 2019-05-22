import { Link } from 'gatsby';
import styled from 'styled-components';

import theme from '../styles/theme';

const TitleContainer = styled(Link)`
  text-decoration: none;
  color: ${theme.color.black.regular};

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: none;
  }
`;

export default TitleContainer;
