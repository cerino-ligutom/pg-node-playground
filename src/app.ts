import express from 'express';

const app = express();

import './knexjs';
import './objectionjs';

app.listen(8080, async () => {
  console.log('Server started on port 8080');
});
