import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { SearchIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import getSummoner from '../services/getSummoner';
import { useRouter } from 'next/router';

const Searchform = () => {
  const [summoner, setSummoner] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(null);

  const router = useRouter();

  const handleClick = async () => {
    setError(null);
    setLoading(true);
    const { data } = await getSummoner(summoner);
    if (!data.id) {
      setError('Summoner not found');
    } else {
      sessionStorage.setItem('summoner', JSON.stringify(data));
      setDataLoaded(data);
    }
    setLoading(false);
    setSummoner('');
  };

  useEffect(() => {
    if (dataLoaded !== null) {
      router.push('/matches');
    }
  }, [dataLoaded]);

  return (
    <VStack spacing={4}>
      <FormControl id="summoner" isRequired isInvalid={!!error}>
        <FormLabel>Summoner</FormLabel>
        <Input value={summoner} onChange={(e) => setSummoner(e.target.value)} />
        {error ? (
          <FormHelperText color="red.400">{error}</FormHelperText>
        ) : (
          <FormHelperText>
            Write the name of the summoner you want to search
          </FormHelperText>
        )}
      </FormControl>
      <Button
        leftIcon={<SearchIcon />}
        color="#1f2933"
        bgColor="#efc9a4"
        variant="solid"
        isLoading={loading}
        onClick={handleClick}
      >
        Search
      </Button>
    </VStack>
  );
};

export default Searchform;
