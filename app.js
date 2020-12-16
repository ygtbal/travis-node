const express = require('express');
const app = express();

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server is running on PORT port`)
});

app.get('/', (req, res) => {
  return res.json({
    message: `Port is ${port}`
  });
});

module.exports = app;