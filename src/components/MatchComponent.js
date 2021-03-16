import { Grid, Heading } from '@chakra-ui/layout';

const MatchComponent = ({ matchData }) => {
  const gameDate = new Date(matchData.gameCreation);
  const minutes = Math.floor(matchData.gameDuration / 60);
  const seconds = matchData.gameDuration % 60;
  const duration = {
    minutes,
    seconds: seconds < 10 ? '0' + seconds.toString() : seconds,
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
