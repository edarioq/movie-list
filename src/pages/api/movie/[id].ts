import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  if (req && process.env.TMDB_API_URL) {
    const api = `${process.env.TMDB_API_URL}/3/movie/${req.query.id}`;
    const headers = {
      Authorization: `Bearer ${process.env.TMDB_API_V4}`,
      'Content-Type': 'application/json;charset=utf-8',
    };
    fetch(api, { headers })
      .then((response) => response.json())
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((error) => {
        res.status(404).json({ error });
        return error;
      });
  }
}
