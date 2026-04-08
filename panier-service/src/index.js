const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

let panier = [];

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'panier', timestamp: new Date().toISOString() });
});

app.get('/panier', (req, res) => {
  res.json(panier);
});

app.post('/panier', (req, res) => {
  const item = req.body;
  panier.push(item);
  res.status(201).json(item);
});

app.listen(PORT, () => {
  console.log(`Panier service running on port ${PORT}`);
});

module.exports = app;

app.get('/version', (req, res) => {
  res.json({
    service: 'panier',
    version: '1.0.1',
    team: 'QuickCommerce Team Evan-Othmane-Youssef-Yahia',
    date: new Date().toISOString()
  });
});
