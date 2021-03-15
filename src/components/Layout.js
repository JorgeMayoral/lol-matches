import { Text } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import Navbar from './Navbar';
import Wrapper from './Wrapper';

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Wrapper>{children}</Wrapper>
      <Wrapper>
        <Text color="gray.500" fontSize="sm">
          LoLMatches isn't endorsed by Riot Games and doesn't reflect the views
          or opinions of Riot Games or anyone officially involved in producing
          or managing Riot Games properties. Riot Games, and all associated
          properties are trademarks or registered trademarks of Riot Games, Inc.
        </Text>
      </Wrapper>
    </Box>
  );
};

export default Layout;
