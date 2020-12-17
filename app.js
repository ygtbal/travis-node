/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('Server is running on PORT port');
});

app.get('/', (req, res) => res.json({
  message: `Host is runnin on ${port}`
}));
module.exports = app;
