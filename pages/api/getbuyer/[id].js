// pages/api/get-buyer/[id].js

import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      const buyer = await db.collection('buyers').findOne({ _id: new ObjectId(id) });

      if (!buyer) {
        return res.status(404).json({ error: 'Buyer not found' });
      }

      res.status(200).json(buyer);
    } catch (error) {
      console.error('Error fetching buyer:', error);
      res.status(500).json({ error: 'Failed to fetch buyer' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
