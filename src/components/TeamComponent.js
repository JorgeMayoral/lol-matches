import { Box, Heading, VStack } from '@chakra-ui/layout';
import ParticipantComponent from './ParticipantComponent';

const TeamComponent = ({ teamData, participants, teamColor }) => {
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
        <Heading size="md">{teamData.firstBlood && 'ð¥Blood'}</Heading>
        <Heading size="md">
          {teamData.firstTower && 'ð¥'}Towers: {teamData.towerKills}
        </Heading>
        <Heading size="md">
          {teamData.FirstInhibitor && 'ð¥'}Inhibitors: {teamData.inhibitorKills}
        </Heading>
        <Heading size="md">
          {teamData.firstDragon && 'ð¥'}Dragons: {teamData.dragonKills}
        </Heading>
        <Heading size="md">
          {teamData.firstRiftHeral && 'ð¥'}Heralds: {teamData.riftHeraldKills}
        </Heading>
        <Heading size="md">
          {teamData.firstBaron && 'ð¥'}Barons: {teamData.baronKills}
        </Heading>

        <Heading>{teamData.win === 'Win' ? 'ð' : 'â'}</Heading>
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
