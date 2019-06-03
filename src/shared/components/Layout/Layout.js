import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Grid from './Grid';
import Main from './Main';

import Header from '../Header';
import Navigation from '../Navigation';

import useWindowWidth from '../../hooks/useWindowWidth';
import GlobalStyle from '../../styles/GlobalStyle';

const Layout = ({ children }) => {
  const width = useWindowWidth();
  return (
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
          {width >= 1199 ? (
            <Grid>
              <Header siteTitle={data.site.siteMetadata.title} />
              <Navigation />
              <Main>{children}</Main>
            </Grid>
          ) : (
            <Grid>
              <Header siteTitle={data.site.siteMetadata.title} />
              <Main>{children}</Main>
            </Grid>
          )}
          <GlobalStyle />
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
