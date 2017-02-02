import React from 'react';
import Layout from '../common/layout/layout';

const Index = ({ ...rest }) =>
  <Layout { ...rest }>
    <div id="content" />
  </Layout>;

export default Index;
