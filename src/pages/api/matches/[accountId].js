const API_URL =
  'https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account';
const API_KEY = process.env.RIOT_API_KEY;

export default async (req, res) => {
  try {
    const { query } = req;
    const { accountId } = query;
    const url = `${API_URL}/${accountId}/?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
