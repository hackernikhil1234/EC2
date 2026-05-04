const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('App running on EC2');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
