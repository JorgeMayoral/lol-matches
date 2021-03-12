export default async function getMatch(gameId) {
  try {
    const url = `/api/match/${gameId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
