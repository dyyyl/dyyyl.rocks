import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import GlobalStyle from '../../styles/GlobalStyle';

const Grid = styled.main`
  height: 90vh;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-areas: navigation main;
`;

const Navigation = styled.nav`
  border-right: 1px solid black;
`;

const Main = styled.article`
  display: flex;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Grid>
          <Navigation />
          <Main>{children}</Main>
        </Grid>
        <GlobalStyle />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
