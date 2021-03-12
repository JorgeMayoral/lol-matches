import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import getMatch from '../services/getMatch';
import Layout from '../components/Layout';

const Match = () => {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameId, setGameId] = useState(null);

  const loadMatch = async () => {
    setLoading(true);
    const response = await getMatch(gameId);
    console.log(response.data);
    setMatchData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    const data = sessionStorage.getItem('matchId');
    setGameId(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (matchData === null && gameId !== null) {
      loadMatch();
    }
  }, [gameId]);

  return (
    <Layout>
      {loading && <Heading>Loading...</Heading>}
      <Box>Test</Box>
    </Layout>
  );
};

export default Match;
