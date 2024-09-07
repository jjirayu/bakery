// pages/api/save-data.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('Sales'); // replace with your database name

      const collection = db.collection('orders');
      const result = await collection.insertOne(req.body);

      res.status(200).json({ message: 'Data saved successfully', result });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Failed to save data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
