const API_URL = 'https://euw1.api.riotgames.com/lol/match/v4/matches';
const API_KEY = process.env.RIOT_API_KEY;

export default async (req, res) => {
  try {
    const { query } = req;
    const { gameId } = query;
    const url = `${API_URL}/${gameId}/?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
