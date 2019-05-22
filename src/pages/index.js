import React from 'react';

import Link from '../shared/components/Link';
import Layout from '../shared/components/Layout';
import Image from '../shared/components/image';
import SEO from '../shared/components/seo';

const IndexPage = () => (
  <Layout>
    <div>
      <SEO title="Home" />
      <h1>Simple & Charming</h1>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
);

export default IndexPage;
