import React, { useEffect, useState } from 'react';

import Container from '../shared/components/Container';
import Description from '../shared/components/Description';
import Layout from '../shared/components/Layout';
import Power from '../shared/components/Power';
import SEO from '../shared/components/seo';

const IndexPage = () => {
  const [power, setPower] = useState(0.0);

  useEffect(() => {
    setPower((Math.random() * 10).toFixed(1));
  }, []);

  return (
    <Layout>
      <Container>
        <SEO title="Home" />
        <h1>Simple & Charming</h1>
        <h3 style={{ margin: '1rem auto' }}>
          <Power>{power}x</Power> UI Engineer - GraphQL Enthusiast - Speaker.
        </h3>
        <Description>
          Feel free to <a href="https://github.com/dyyyl">check out my code</a>{' '}
          👨🏽‍💻
        </Description>
        <Description>
          Follow me on <a href="https://twitter.com/dyyyyyyyyyl">Twitter</a> 🐦
        </Description>
      </Container>
    </Layout>
  );
};

export default IndexPage;
