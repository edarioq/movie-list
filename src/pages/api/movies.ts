import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
): void {
  if (req) {
    res.status(200).json({ test: 'hi' });
  }
}
