import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/layout';
import ParticipantComponent from './ParticipantComponent';

const TeamComponent = ({ teamData, participants, teamColor }) => {
  console.log(teamData);
  return (
    <Box
      bgColor={teamColor === 'blue' ? '#1ddecb' : '#efc9a4'}
      borderRadius="lg"
      p={5}
      mr={5}
      mb={5}
      color="#000"
      w={380}
      boxShadow="dark-lg"
    >
      <VStack>
        <Heading>{teamColor === 'blue' ? 'Blue Team' : 'Red Team'}</Heading>
        <Heading size="md">{teamData.firstBlood && '🥇Blood'}</Heading>
        <Heading size="md">
          {teamData.firstTower && '🥇'}Towers: {teamData.towerKills}
        </Heading>
        <Heading size="md">
          {teamData.FirstInhibitor && '🥇'}Inhibitors: {teamData.inhibitorKills}
        </Heading>
        <Heading size="md">
          {teamData.firstDragon && '🥇'}Dragons: {teamData.dragonKills}
        </Heading>
        <Heading size="md">
          {teamData.firstRiftHeral && '🥇'}Heralds: {teamData.riftHeraldKills}
        </Heading>
        <Heading size="md">
          {teamData.firstBaron && '🥇'}Barons: {teamData.baronKills}
        </Heading>

        <Heading>{teamData.win === 'Win' ? '🏆' : '❌'}</Heading>
        <VStack>
          {participants.map((participant) => (
            <ParticipantComponent
              key={participant.championId}
              participantData={participant}
            />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default TeamComponent;
