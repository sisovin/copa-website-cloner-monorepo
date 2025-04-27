import { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from '../../../../services/storage.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const fileContent = await readFile(`cloned-website-${id}.html`);
      res.setHeader('Content-Disposition', `attachment; filename="cloned-website-${id}.html"`);
      res.status(200).send(fileContent);
    } catch (error) {
      res.status(500).json({ error: 'Failed to download the cloned website' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
