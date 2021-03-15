import { Heading, SimpleGrid } from '@chakra-ui/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import MatchCard from '../../components/MatchCard';
import SummonerCard from '../../components/SummonerCard';
import getMatches from '../../services/getMatches';
import getSummoner from '../../services/getSummoner';

const Matches = () => {
  const [summoner, setSummoner] = useState(null);
  const [matches, setMatches] = useState(null);
  const [accountName, setAccountName] = useState(null);
  const router = useRouter();

  const loadMatches = async () => {
    const data = sessionStorage.getItem(`matches-${accountName}`);
    if (data) {
      const parsedData = JSON.parse(data);
      setMatches(parsedData);
    } else {
      const response = await getMatches(summoner.accountId);
      setMatches(response.data.matches);
      sessionStorage.setItem(
        `matches-${accountName}`,
        JSON.stringify(response.data.matches),
      );
    }
  };

  const loadSummoner = async () => {
    const data = sessionStorage.getItem(`summoner-${accountName}`);
    if (data) {
      const parsedData = JSON.parse(data);
      setSummoner(parsedData);
    } else {
      const response = await getSummoner(accountName);
      setSummoner(response.data);
      sessionStorage.setItem(
        `summoner-${accountName}`,
        JSON.stringify(response.data),
      );
    }
  };

  useEffect(() => {
    if (accountName === null) {
      const name = router.query.summoner;
      setAccountName(name);
    }
  }, []);

  useEffect(() => {
    if (accountName !== null && summoner === null) {
      loadSummoner();
    }

    if ((summoner !== null) & (matches === null)) {
      loadMatches();
    }
  }, [accountName, summoner]);

  return (
    <Layout>
      <Head>
        <title>
          {summoner ? `${summoner.name} | LoLMatches` : 'LoLMatches'}
        </title>
      </Head>
      {summoner && <SummonerCard summoner={summoner} />}
      <Heading size="md" mt={8} mb={2}>
        Latest matches
      </Heading>
      {matches && (
        <SimpleGrid columns={[1, 2]} spacing={10}>
          {matches.map((match) => (
            <MatchCard match={match} key={match.gameId} />
          ))}
        </SimpleGrid>
      )}
    </Layout>
  );
};

export default Matches;
