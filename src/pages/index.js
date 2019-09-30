import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Container from '../shared/components/Container';
import Description from '../shared/components/Description';
import Excerpt from '../shared/components/Excerpt';
import Item from '../shared/components/Item';
import Layout from '../shared/components/Layout';
import Link from '../shared/components/Link';
import Power from '../shared/components/Power';
import SEO from '../shared/components/seo';
import Title from '../shared/components/Title';

import useWindowWidth from '../shared/hooks/useWindowWidth';

const IndexPage = ({ data }) => {
  const [power, setPower] = useState(0.0);
  const width = useWindowWidth();

  useEffect(() => {
    setPower((Math.random() * 10).toFixed(1));
  }, []);
  return (
    <Layout>
      <div>
        <Container>
          <SEO title="Home" />
          <Title style={{ fontWeight: '700' }}>Simple & Charming</Title>
          <h3 style={{ margin: '1rem auto' }}>
            <Power>{power}x</Power> UI Engineer - GraphQL Enthusiast - Speaker.
          </h3>
          <Description>
            Feel free to{' '}
            <a href="https://github.com/dyyyl">check out my code</a> 👨🏽‍💻
          </Description>
          <Description>
            Follow me on <a href="https://twitter.com/dyyyyyyyyyl">Twitter</a>{' '}
            🐦
          </Description>
        </Container>
        {width <= 1199 ? (
          <Container>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Item key={node.id}>
                <Link to={node.fields.slug}>
                  <h3 style={{ fontWeight: '700' }}>
                    {node.frontmatter.title.toUpperCase()}
                  </h3>
                  <p>
                    {node.frontmatter.date} • {node.fields.readingTime.text}
                  </p>
                </Link>
                <Excerpt>{node.frontmatter.description}</Excerpt>
              </Item>
            ))}
          </Container>
        ) : (
          ''
        )}
      </div>
    </Layout>
  );
};

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
            description
            date(formatString: "MMMM DD, YYYY", locale: "en-EN")
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
