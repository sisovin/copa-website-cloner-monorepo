import { NextApiRequest, NextApiResponse } from 'next';
import { getJobStatus } from '../../../../services/website-cloner.service';
import { WebsiteJobResponseDto } from '../../../../types/website-cloner.d';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const jobStatus: WebsiteJobResponseDto = await getJobStatus(Number(id));
      res.status(200).json(jobStatus);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch job status' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
