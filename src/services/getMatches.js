export default async function getMatches(accountId) {
  try {
    const url = `/api/matches/${accountId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
