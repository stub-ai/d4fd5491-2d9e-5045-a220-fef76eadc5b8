import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/tts-1-hd/completions',
        { text },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          responseType: 'arraybuffer',
        }
      );

      const audio = `data:audio/mpeg;base64,${Buffer.from(response.data).toString('base64')}`;

      res.status(200).json({ audio });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate audio' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}