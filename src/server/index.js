'use strict';
/* eslint-disable no-console */
const express   = require('express');
const path      = require('path');

const app       = express();
const DOCS_PATH = '../../docs/';

app.use(express.static(path.join(__dirname, DOCS_PATH)));

app.get(
  '/', 
  (req, res) => res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html'))
);

app.listen(
  8081, 
  'localhost', 
  () => console.log('Minimalist production server running on localhost:8081')
);
