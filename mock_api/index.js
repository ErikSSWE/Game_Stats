const liverpool_info = require('./save_data/team_liverpool.json');
const wh_info = require('./save_data/team_west_ham.json');
const h2h_info = require('./save_data/h2h_info.json');
const h2h_game_info_liverpool = require('./save_data/h2h_game_info_liverpool.json');
const h2h_game_info_wh = require('./save_data/h2h_game_info_west_ham.json');

const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

app.get('/team_info', (req, res) => {
  //recreation of getting teams info like id:s
  if (req.query.team == "Liverpool") {
    res.json(liverpool_info);
  } else if (req.query.team == "West Ham") {
    res.json(wh_info);
  }
  res.status(400);
});

app.get('/h2h_info', (req, res) => {
  //recreation of getting all the info of the latest h2hs
  res.json(h2h_info);
});

app.get('/game_info', (req, res) => {
  // recreation of fething game info
  if (req.query.team == 40) {
    for (i in h2h_game_info_liverpool) {
      if (h2h_game_info_liverpool[i].parameters.fixture == req.query.fixture) {
        res.json(h2h_game_info_liverpool[i]);
      }
    }
  }
  for (i in h2h_game_info_wh) {
    if (h2h_game_info_wh[i].parameters.fixture == req.query.fixture) {
      res.json(h2h_game_info_wh[i]);
    }
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
