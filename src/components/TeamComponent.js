import { Heading } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/layout';
import ParticipantComponent from './ParticipantComponent';

const TeamComponent = ({ teamData, participants }) => {
  return (
    <VStack>
      <Heading size="md">Barons: {teamData.baronKills}</Heading>
      <Heading size="md">Dragons: {teamData.dragonKills}</Heading>
      <Heading size="md">Inhibitors: {teamData.inhibitorKills}</Heading>
      <Heading size="md">Heralds: {teamData.riftHeraldKills}</Heading>
      <Heading size="md">Towers: {teamData.towerKills}</Heading>
      {teamData.firstBaron && <Heading size="md">First Baron</Heading>}
      {teamData.firstBlood && <Heading size="md">First Blood</Heading>}
      {teamData.firstDragon && <Heading size="md">First Dragon</Heading>}
      {teamData.FirstInhibitor && <Heading size="md">First Inhibitor</Heading>}
      {teamData.firstRiftHeral && (
        <Heading size="md">First Rift Herald</Heading>
      )}
      {teamData.firstTower && <Heading size="md">First Tower</Heading>}
      <Heading>{teamData.win}</Heading>
      <VStack>
        {participants.map((participant) => (
          <ParticipantComponent
            key={participant.championId}
            participantData={participant}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default TeamComponent;
