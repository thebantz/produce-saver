const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.send('Hello from Produce Saver!')
)

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
