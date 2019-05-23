import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Link from '../Link';
import NavigationContainer from './NavigationContainer';
import PostLink from './PostLink';

const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const Navigation = () => (
  <StaticQuery
    query={query}
    render={data => (
      <NavigationContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostLink key={node.id}>
            <Link to={node.fields.slug}>
              <h4>{node.frontmatter.title.toUpperCase()}</h4>
            </Link>
          </PostLink>
        ))}
      </NavigationContainer>
    )}
  />
);

export default Navigation;
