const API_URL =
  'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name';
const API_KEY = process.env.RIOT_API_KEY;

export default async (req, res) => {
  try {
    const { query } = req;
    const { name } = query;
    const url = `${API_URL}/${name}/?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
