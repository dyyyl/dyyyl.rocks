import React, { useEffect, useState } from 'react';

import Layout from '../shared/components/Layout';
import SEO from '../shared/components/seo';

const IndexPage = () => {
  const [power, setPower] = useState(0.0);

  useEffect(() => {
    setPower((Math.random() * 10).toFixed(1));
  }, []);

  return (
    <Layout>
      <div>
        <SEO title="Home" />
        <h1>Simple & Charming</h1>
        <h2>{power}x UI Engineer for Hire - GraphQL Enthusiast - Speaker.</h2>
        <p>
          Feel free to <a href="https://github.com/dyyyl">check out my code</a>{' '}
          👨🏽‍💻
        </p>
        <p>
          Follow me on <a href="https://twitter.com/dyyyyyyyyyl">Twitter</a> 🐦
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
