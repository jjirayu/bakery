import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('Customer'); // Replace with your database name

    // Update or insert the visitor counter
    const data = await db.collection('visitorCount').findOneAndUpdate(
      { _id: 'visitorCounter' }, // Use a fixed ID for simplicity
      { $inc: { count: 1 } },   // Increment the count by 1
     
    );

    const updatedCount = data.value ? data.value.count : 1;
    return res.status(200).json({ count: updatedCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
