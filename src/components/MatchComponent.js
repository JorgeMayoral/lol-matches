import { Heading } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';

const MatchComponent = ({ matchData }) => {
  const gameDate = new Date(matchData.gameCreation);
  const duration = {
    minutes: Math.floor(matchData.gameDuration / 60),
    seconds: matchData.gameDuration % 60,
  };
  return (
    <Grid>
      <Heading>Date: {gameDate.toLocaleDateString()}</Heading>
      <Heading>
        Duration: {duration.minutes}:{duration.seconds}
      </Heading>
    </Grid>
  );
};

export default MatchComponent;
