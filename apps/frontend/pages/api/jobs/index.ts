import { NextApiRequest, NextApiResponse } from 'next';
import { cloneWebsite } from '../../../../services/website-cloner.service';
import { CreateWebsiteJobDto } from '../../../../types/website-cloner.d';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const createWebsiteJobDto: CreateWebsiteJobDto = req.body;
      const jobId = await cloneWebsite(createWebsiteJobDto);
      res.status(201).json({ jobId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create job' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
