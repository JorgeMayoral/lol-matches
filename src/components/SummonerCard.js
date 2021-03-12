import { Box, Heading, VStack, HStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Container } from '@chakra-ui/layout';

const SummonerCard = ({ summoner }) => {
  return (
    <Box bgColor="#3e4c59" rounded="lg" boxShadow="dark-lg" maxH="xs" py={4}>
      <Container maxW="container.xs" ml={0}>
        <HStack>
          {/*<Image
            src={`/images/profileicon/${summoner.profileIconId}.png`}
            roundedLeft="lg"
            alt="Summoner profile icon"
            fallbackSrc="/images/profileicon/placeholder.png"
          />*/}
          <VStack pl={4}>
            <Heading size="lg">{summoner.name}</Heading>
            <Heading size="lg">Level: {summoner.summonerLevel}</Heading>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default SummonerCard;
