import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import getMatches from '../services/getMatches';
import Head from 'next/head';
import SummonerCard from '../components/SummonerCard';

const matches = () => {
  const [summoner, setSummoner] = useState(null);
  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadMatches = async () => {
    setLoading(true);
    const response = await getMatches(summoner.accountId);
    console.log(response.data.matches[0]); //TODO: Remove
    console.log(summoner); //TODO: Remove
    setMatches(response.data.matches);
    setLoading(false);
  };

  useEffect(() => {
    const data = sessionStorage.getItem('summoner');
    setSummoner(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (matches === null && summoner !== null) {
      loadMatches();
    }
  }, [summoner]);

  return (
    <Layout>
      <Head>
        <title>
          {summoner ? `${summoner.name} | LoLMatches` : 'LoLMatches'}
        </title>
      </Head>
      {summoner && <SummonerCard summoner={summoner} />}
    </Layout>
  );
};

export default matches;
