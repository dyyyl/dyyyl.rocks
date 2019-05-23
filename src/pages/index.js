import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../shared/components/Layout';
import Link from '../shared/components/Link';
import SEO from '../shared/components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <div>
      <SEO title="Home" />
      <h1>Simple & Charming</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h4>{node.frontmatter.title.toUpperCase()}</h4>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
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

export default IndexPage;
