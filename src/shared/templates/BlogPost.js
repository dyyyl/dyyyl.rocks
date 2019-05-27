import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import SEO from '../components/seo';

import Container from '../components/Container';
import Layout from '../components/Layout';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date} • {post.fields.readingTime.text}
        </p>
        <div
          style={{ marginTop: '2rem' }}
          dangerouslySetInnerHTML={{ __html: post.html }} // eslint-disable-line
        />
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
        date(formatString: "MMMM DD, YYYY", locale: "en-EN")
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;

export default BlogPost;
