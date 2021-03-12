export default async function getSummoner(name) {
  try {
    const url = `/api/summoner/${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
