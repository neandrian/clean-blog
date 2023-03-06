const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} da çalışmaya başladı...`);
});
