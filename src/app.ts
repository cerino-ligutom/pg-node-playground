import express from 'express';
import { pgKnex } from './pg-knex';

const app = express();

(async () => {
  try {
    await pgKnex.raw('SELECT 1');
    console.log('PostgreSQL connected');
  } catch (e) {
    console.log('PostgreSQL not connected');
    console.error(e);
  }
})();

import './objectionjs';

app.listen(8080, async () => {
  console.log('Server started on port 8080');
});
