import { Center, Heading, Flex, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex zIndex={1} position="sticky" top={0} p={4} bg="#2d132c">
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <NextLink href="/">
          <Link _hover={{ textDecoration: 'none' }}>
            <Center>
              <Heading color="red">LoL</Heading>
              <Heading>Matches</Heading>
            </Center>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
