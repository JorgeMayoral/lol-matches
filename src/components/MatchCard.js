import { Box, Heading, VStack, HStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Container } from '@chakra-ui/layout';
import championList from '../data/championsData.json';
import { useEffect, useState } from 'react';
import { Center } from '@chakra-ui/layout';

const MatchCard = ({ match }) => {
  const [champ, setChamp] = useState({});
  const date = new Date(match.timestamp);

  useEffect(() => {
    const currentChamp = championList.find((c) => c.id == match.champion);
    setChamp(currentChamp);
  }, []);

  return (
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
  );
};

export default MatchCard;
