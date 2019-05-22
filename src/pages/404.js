import React from 'react';

import Layout from '../shared/components/Layout';
import SEO from '../shared/components/seo';

const NotFoundPage = () => (
  <Layout>
    <div>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
