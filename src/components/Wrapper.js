import { Box } from '@chakra-ui/layout';

const Wrapper = ({ children }) => {
  return (
    <Box mt={8} mx="auto" maxW="4xl" px={4} pb={8}>
      {children}
    </Box>
  );
};

export default Wrapper;
