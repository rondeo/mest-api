const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const buildRoutes = require('../infra/routes');

const app = express();

app.port = process.env.APP_PORT || 3000;

app.start = () => new Promise(async (resolve) => {
  app.use(bodyParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  buildRoutes(app);

  resolve();
});

module.exports = app;