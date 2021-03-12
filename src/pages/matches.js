import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import getMatches from '../services/getMatches';
import Head from 'next/head';
import SummonerCard from '../components/SummonerCard';
import { SimpleGrid } from '@chakra-ui/layout';
import MatchCard from '../components/MatchCard';
import { Heading } from '@chakra-ui/layout';

const Matches = () => {
  const [summoner, setSummoner] = useState(null);
  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadMatches = async () => {
    setLoading(true);
    const response = await getMatches(summoner.accountId);
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
      <Heading size="md" mt={8} mb={2}>
        Latest matches
      </Heading>
      {matches && (
        <SimpleGrid columns={[1, 2]} spacing={10}>
          {matches.map((match) => (
            <MatchCard match={match} key={match.gameId} />
          ))}
        </SimpleGrid>
      )}
    </Layout>
  );
};

export default Matches;
