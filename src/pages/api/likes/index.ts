// src/pages/api/likes/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db } = await connectToDatabase();

    switch (req.method) {
      case 'POST':
        return handlePostRequest(req, res, db);

      case 'GET':
        return handleGetRequest(req, res, db);

      default:
        res.setHeader('Allow', ['POST', 'GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error connecting to database:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse, db: any) {
  try {
    const { videoId, action } = req.body;
    if (!videoId || !action || (action !== 'like' && action !== 'dislike')) {
      return res.status(400).json({ error: 'Invalid request parameters' });
    }

    // Example: Inserting like/dislike into MongoDB
    const result = await db.collection('likes').insertOne({
      videoId,
      action,
      createdAt: new Date(),
    });

    return res.status(201).json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse, db: any) {
  try {
    const { videoId: id } = req.query;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: 'Invalid videoId parameter' });
    }

    // Example: Fetch likes/dislikes count from MongoDB for a specific videoId
    const likes = await db.collection('likes').countDocuments({ videoId: id, action: 'like' });
    const dislikes = await db.collection('likes').countDocuments({ videoId: id, action: 'dislike' });

    return res.status(200).json({ likes, dislikes });
  } catch (error) {
    console.error('Error handling GET request:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default handler;
