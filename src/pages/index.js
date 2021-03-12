import Layout from '../components/Layout';
import Head from 'next/head';
import Searchform from '../components/Searchform';

const Index = () => (
  <Layout>
    <Head>
      <title>LoL Matches</title>
    </Head>
    <Searchform />
  </Layout>
);

export default Index;
