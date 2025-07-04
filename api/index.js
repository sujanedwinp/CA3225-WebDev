export default async function handler(req, res) {
  const path = require('path');
  const fs = require('fs');
  const htmlFile = process.env.HTML_FILE || 'api/all-pages/timetable.html';
  const filePath = path.join(process.cwd(), htmlFile);
  console.log('Resolved file path:', filePath); // Debug log
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send('File not found');
  }
} 