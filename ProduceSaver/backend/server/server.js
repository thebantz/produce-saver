const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router.js');

// CONNECT TO DB
mongoose.connect('mongodb://localhost/nativeMovies', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(morgan('combined'));

// Use v1 as prefix for all API endpoints
app.use('/v1', router);

app.get('/', (req, res) =>
  res.send('Hello from Produce Saver!')
)

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
