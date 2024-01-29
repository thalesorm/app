// src/app.js (ou server.js)
require('dotenv').config();

const express = require('express');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Use as rotas
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
