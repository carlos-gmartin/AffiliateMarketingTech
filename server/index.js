const http = require('http');
const pug = require('pug');
const express = require('express');

const app = express()

app.set('view engine', 'pug')
app.set('views', './src/templates')
app.get('/', (req, res) => {
  res.render('index')
})

const hostname = '127.0.0.1';
const port = 8000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});