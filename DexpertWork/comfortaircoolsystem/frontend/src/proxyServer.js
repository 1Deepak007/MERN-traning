// Proxy server
// PS D:\LearnNGrow\Programming\DexpertTraning\DexpertWork\comfortaircoolsystem\frontend\src> node proxyServer.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;

require('dotenv').config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/search', async (req, res) => {
  try {
    const response = await axios.get('https://api.pexels.com/v1/search', {
      headers: {
        Authorization: process.env.PEXELS_API_KEY
      },
      params: req.query
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from Pexels API');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
