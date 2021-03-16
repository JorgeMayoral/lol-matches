import Head from 'next/head';
import Layout from '../components/Layout';
import Searchform from '../components/Searchform';

const Index = () => (
  <Layout>
    <Head>
      <title>LoLMatches</title>
    </Head>
    <Searchform />
  </Layout>
);

export default Index;
