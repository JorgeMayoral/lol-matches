import { Image } from '@chakra-ui/image';
import { Box, Center, Heading, VStack } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import championList from '../data/championsData.json';

const MatchCard = ({ match }) => {
  const [champ, setChamp] = useState({});
  const date = new Date(match.timestamp);

  useEffect(() => {
    const currentChamp = championList.find((c) => c.id == match.champion);
    setChamp(currentChamp);
  }, []);

  return (
    <NextLink href={`/match/${match.gameId}`}>
      <Box
        bgColor="#52606d"
        rounded="lg"
        boxShadow="lg"
        w="xs"
        _hover={{ cursor: 'pointer', bgColor: '#616e7c' }}
      >
        <Center>
          <Image src={`/images/champion/${champ.image}`} alt={champ.name} />
          <VStack ml={8}>
            <Heading size="md">{champ.name}</Heading>
            <Heading size="xs">{date.toLocaleString()}</Heading>
          </VStack>
        </Center>
      </Box>
    </NextLink>
  );
};

export default MatchCard;
