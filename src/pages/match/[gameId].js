import { useEffect, useState } from 'react';
import getMatch from '../../services/getMatch';
import Layout from '../../components/Layout';
import MatchComponent from '../../components/MatchComponent';
import TeamComponent from '../../components/TeamComponent';
import { HStack } from '@chakra-ui/layout';
import { useRouter } from 'next/router';

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
          <HStack>
            <TeamComponent
              teamData={matchData.teams[0]}
              participants={matchData.participants.slice(0, 5)}
            />
            <TeamComponent
              teamData={matchData.teams[1]}
              participants={matchData.participants.slice(5, 10)}
            />
          </HStack>
        </>
      )}
    </Layout>
  );
};

export default Match;
