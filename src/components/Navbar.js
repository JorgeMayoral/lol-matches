import { Center, Flex, Heading, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex zIndex={1} position="sticky" top={0} p={4} bg="#52606d">
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <NextLink href="/">
          <Link _hover={{ textDecoration: 'none' }}>
            <Center>
              <Heading>LoL</Heading>
              <Heading>Matches</Heading>
            </Center>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
