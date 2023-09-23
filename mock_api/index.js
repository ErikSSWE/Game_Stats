const mff = require('./mock_data/mff');
const h2h = require('./mock_data/last5h2h');
const stats = require('./mock_data/game_stat');

const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

app.get('/mff', (req, res) => {
  res.json(mff.mff);
});

app.get('/degen', (req, res) => {
    res.json(mff.mff);
});

app.get('/h2h', (req, res) => {
  // last 5 h2h ids:
  res.json(h2h.h2h);
});

app.get('/stats', (req, res) => {
  // stats for team in a game:
  res.json(stats.game_stat);
});

app.get('/5latest', (req, res) => {
  // stats for team in a game:
  res.json(stats.game_stat);
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
