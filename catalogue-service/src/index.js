const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'catalogue', timestamp: new Date().toISOString() });
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999.99, stock: 10 },
    { id: 2, name: 'Mouse', price: 29.99, stock: 50 },
    { id: 3, name: 'Keyboard', price: 79.99, stock: 30 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Catalogue service running on port ${PORT}`);
});

module.exports = app;
