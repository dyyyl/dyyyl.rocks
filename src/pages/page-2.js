import React from 'react';
import Link from '../shared/components/Link';

import Layout from '../shared/components/Layout';
import SEO from '../shared/components/seo';

const SecondPage = () => (
  <Layout>
    <div>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default SecondPage;
