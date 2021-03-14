export default async function getMatch(gameId) {
  try {
    const url = `/api/match/${gameId}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const participants = [];
    for (let i = 0; i < data.participantIdentities.length; i++) {
      const participant = {
        identity: data.participantIdentities[i],
        ...data.participants[i],
      };
      participants.push(participant);
    }
    const parsedData = {
      gameCreation: data.gameCreation,
      gameDuration: data.gameDuration,
      teams: data.teams,
      participants: participants,
    };
    return parsedData;
  } catch (error) {
    console.error(error);
    return error;
  }
}
