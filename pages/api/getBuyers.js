// pages/api/get-buyers.js

import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Await the client from clientPromise
      const client = await clientPromise;
      const db = client.db('Sales'); // Replace 'your_database_name' with your actual DB name

      // Fetch buyers from the collection
      const buyers = await db.collection('orders').find({}).toArray();

      // Send the data as a response
      res.status(200).json(buyers);
    } catch (error) {
      console.error('Error fetching buyers:', error);
      res.status(500).json({ error: 'Failed to fetch buyers' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
