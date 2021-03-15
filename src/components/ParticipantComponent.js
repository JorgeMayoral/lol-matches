import { Image } from '@chakra-ui/image';
import { Box, Center, Heading, HStack, Text } from '@chakra-ui/layout';
import championList from '../data/championsData.json';

const ParticipantComponent = ({ participantData }) => {
  const champion = championList.find((c) => c.id == participantData.championId);

  return (
    <HStack
      border="2px"
      borderRadius="lg"
      bgColor={participantData.teamId === 100 ? '#16a698' : '#b3977b'}
      borderColor={participantData.teamId === 100 ? '#16a698' : '#b3977b'}
      boxShadow="xl"
      color="white"
    >
      <Image src={`/images/champion/${champion.image}`} />
      <Box mr={2}>
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
            borderLeftRadius="lg"
            boxSize="7"
          />
          <Image
            src={`/images/items/${participantData.stats.item1}.png`}
            borderLeftRadius="lg"
            boxSize="7"
          />
          <Image
            src={`/images/items/${participantData.stats.item2}.png`}
            borderLeftRadius="lg"
            boxSize="7"
          />
          <Image
            src={`/images/items/${participantData.stats.item3}.png`}
            borderLeftRadius="lg"
            boxSize="7"
          />
          <Image
            src={`/images/items/${participantData.stats.item4}.png`}
            borderLeftRadius="lg"
            boxSize="7"
          />
          <Image
            src={`/images/items/${participantData.stats.item5}.png`}
            borderLeftRadius="lg"
            boxSize="7"
          />
          <Image
            src={`/images/items/${participantData.stats.item6}.png`}
            borderLeftRadius="lg"
            boxSize="7"
          />
        </Center>
      </Box>
    </HStack>
  );
};

export default ParticipantComponent;
