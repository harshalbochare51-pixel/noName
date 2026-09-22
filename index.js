require('dotenv').config();
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/harshal', (req, res) => {
  res.send('chaala jaa!')
});


app.get('/twiter', (req, res) => {
  res.send('<h1>Hello u are in twiter main page !</h1>')
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});