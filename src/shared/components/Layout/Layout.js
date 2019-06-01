import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Grid from './Grid';
import Main from './Main';

import Header from '../Header';
import Navigation from '../Navigation';

import useWindowSize from '../../hooks/useWindowSize';
import GlobalStyle from '../../styles/GlobalStyle';

const Layout = ({ children }) => {
  const windowSize = useWindowSize();
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
          <Header siteTitle={data.site.siteMetadata.title} />
          {windowSize.width >= 1199 || undefined ? (
            <Grid>
              <Navigation />
              <Main>{children}</Main>
            </Grid>
          ) : (
            <main
              style={{
                height: '93vh',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Main>{children}</Main>
            </main>
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
