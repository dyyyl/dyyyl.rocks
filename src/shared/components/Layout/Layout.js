import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

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
          <Helmet>
            <script>
              {`
                (function(d) {
                  var config = {
                    kitId: 'tma0uzm',
                    scriptTimeout: 3000,
                    async: true
                  },
                  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                })(document);
              `}
            </script>
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          {width >= 1199 ? (
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
