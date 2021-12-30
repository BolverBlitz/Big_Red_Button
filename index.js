const express = require('express');

const app = express();

app.use('/', express.static('./'));

const port = process.env.PORT || 10016;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: ${process.env.IP || "localhost"}:${port}`);
  /* eslint-enable no-console */
});