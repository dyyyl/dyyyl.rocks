import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        {/* eslint-disable-next-line */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
