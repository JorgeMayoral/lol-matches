import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { SearchIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';
import { useState } from 'react';
import NextLink from 'next/link';

const Searchform = () => {
  const [summoner, setSummoner] = useState('');

  return (
    <VStack spacing={4}>
      <FormControl id="summoner" isRequired>
        <FormLabel>Summoner</FormLabel>
        <Input value={summoner} onChange={(e) => setSummoner(e.target.value)} />
        <FormHelperText>
          Write the name of the summoner you want to search
        </FormHelperText>
      </FormControl>
      <NextLink href={`/matches/${summoner}`}>
        <Button
          leftIcon={<SearchIcon />}
          color="#1f2933"
          bgColor="#efc9a4"
          variant="solid"
        >
          Search
        </Button>
      </NextLink>
    </VStack>
  );
};

export default Searchform;
