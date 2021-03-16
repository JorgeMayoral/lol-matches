import { SimpleGrid } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import MatchComponent from '../../components/MatchComponent';
import TeamComponent from '../../components/TeamComponent';
import getMatch from '../../services/getMatch';
import Head from 'next/head';

const Match = () => {
  const [matchData, setMatchData] = useState(null);
  const [gameId, setGameId] = useState(null);
  const router = useRouter();

  const loadMatch = async () => {
    const data = sessionStorage.getItem(`match-${gameId}`);
    if (data) {
      console.log(data);
      const parsedData = JSON.parse(data);
      setMatchData(parsedData);
    } else {
      const response = await getMatch(gameId);
      setMatchData(response);
      sessionStorage.setItem(`match-${gameId}`, JSON.stringify(response));
    }
  };

  useEffect(() => {
    if (gameId === null) {
      const game = router.query.gameId;
      setGameId(game);
    }
  }, []);

  useEffect(() => {
    if (gameId !== null && matchData === null) {
      loadMatch();
    }
  }, [gameId]);

  return (
    <Layout>
      <Head>
        <title>Match | LoLMAtches</title>
      </Head>
      {matchData && (
        <>
          <MatchComponent matchData={matchData} />
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="lg">
            <TeamComponent
              teamData={matchData.teams[0]}
              participants={matchData.participants.slice(0, 5)}
              teamColor="blue"
            />
            <TeamComponent
              teamData={matchData.teams[1]}
              participants={matchData.participants.slice(5, 10)}
              teamColor="red"
            />
          </SimpleGrid>
        </>
      )}
    </Layout>
  );
};

export default Match;
