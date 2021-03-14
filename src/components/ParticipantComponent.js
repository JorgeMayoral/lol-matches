import { Image } from '@chakra-ui/image';
import { Text } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import championList from '../data/championsData.json';

const ParticipantComponent = ({ participantData }) => {
  const champion = championList.find((c) => c.id == participantData.championId);

  return (
    <Box>
      <Heading size="sm">
        {participantData.stats.champLevel} -{' '}
        {participantData.identity.player.summonerName} ({champion.name})
      </Heading>
      <Text>
        {participantData.stats.kills}/{participantData.stats.deaths}/
        {participantData.stats.assists}
      </Text>
      <Center>
        <Image
          src={`/images/items/${participantData.stats.item0}.png`}
          boxSize="5"
        />
        <Image
          src={`/images/items/${participantData.stats.item1}.png`}
          boxSize="5"
        />
        <Image
          src={`/images/items/${participantData.stats.item2}.png`}
          boxSize="5"
        />
        <Image
          src={`/images/items/${participantData.stats.item3}.png`}
          boxSize="5"
        />
        <Image
          src={`/images/items/${participantData.stats.item4}.png`}
          boxSize="5"
        />
        <Image
          src={`/images/items/${participantData.stats.item5}.png`}
          boxSize="5"
        />
        <Image
          src={`/images/items/${participantData.stats.item6}.png`}
          boxSize="5"
        />
      </Center>
    </Box>
  );
};

export default ParticipantComponent;
