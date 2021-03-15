import { useEffect, useState } from 'react';
import getMatch from '../../services/getMatch';
import Layout from '../../components/Layout';
import MatchComponent from '../../components/MatchComponent';
import TeamComponent from '../../components/TeamComponent';
import { HStack } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { Grid } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/layout';

const Match = () => {
  const [matchData, setMatchData] = useState(null);
  const [gameId, setGameId] = useState(null);
  const router = useRouter();

  const loadMatch = async () => {
    const response = await getMatch(gameId);
    setMatchData(response);
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
