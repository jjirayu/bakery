import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('Sales'); // Ensure database name is correct

      // Convert the string id to MongoDB ObjectId
      const buyer = await db.collection('orders').findOne({ _id: new ObjectId(id) });

      if (!buyer) {
        res.status(404).json({ message: 'Buyer not found' });
        return;
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
