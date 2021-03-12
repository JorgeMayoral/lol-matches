import { Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const matches = () => {
  const [summoner, setSummoner] = useState(null);
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem('summoner');
    setSummoner(JSON.parse(data));
  }, []);

  return <Layout>{summoner && <Text>{summoner.id}</Text>}</Layout>;
};

export default matches;
