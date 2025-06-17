const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!'});
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
