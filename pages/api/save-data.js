import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const dataPath = path.join(process.cwd(), 'app', 'datacollection.js');
    const content = `export const data = ${JSON.stringify(req.body, null, 2)};\n`;

    try {
      fs.writeFileSync(dataPath, content, 'utf8');
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error writing to file:', error);
      res.status(500).json({ message: 'Error saving data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
