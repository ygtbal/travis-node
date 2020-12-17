/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';
import db from './server/src/models';

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('Server is running on PORT port');
});

app.get('/', (req, res) => res.json({
  message: `Host is runnin on ${port}`
}));

app.get('/books', (req, res) => {
  db.Book.findAll({}).then((data) => res.json({
    data
  })).catch((err) => res.json({
    data: err
  }));
});

module.exports = app;
