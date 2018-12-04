'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.use(express.static('./city-explorer-client'));

app.get('/home', function(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});
