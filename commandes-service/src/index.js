const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

let commandes = [];

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'commandes', timestamp: new Date().toISOString() });
});

app.get('/commandes', (req, res) => {
  res.json(commandes);
});

app.post('/commandes', (req, res) => {
  const commande = { id: commandes.length + 1, ...req.body, status: 'pending' };
  commandes.push(commande);
  res.status(201).json(commande);
});

app.listen(PORT, () => {
  console.log(`Commandes service running on port ${PORT}`);
});

module.exports = app;

app.get('/version', (req, res) => {
  res.json({
    service: 'commandes',
    version: '1.0.1',
    team: 'QuickCommerce Team Evan-Othmane-Youssef-Yahia',
    date: new Date().toISOString()
  });
});
