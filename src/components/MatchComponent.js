import { Grid, Heading } from '@chakra-ui/layout';

const MatchComponent = ({ matchData }) => {
  const gameDate = new Date(matchData.gameCreation);
  const duration = {
    minutes: Math.floor(matchData.gameDuration / 60),
    seconds: matchData.gameDuration % 60,
  };
  return (
    <Grid>
      <Heading>
        {gameDate.toLocaleDateString()} - {duration.minutes}:{duration.seconds}
      </Heading>
    </Grid>
  );
};

export default MatchComponent;
