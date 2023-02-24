import config from '../../knexfile';
import { knex } from 'knex';

export const pgKnex = knex(config);

export async function pingKnex() {
  try {
    await pgKnex.raw('SELECT 1');
    console.log('PostgreSQL connected');
  } catch (e) {
    console.log('PostgreSQL not connected');
    console.error(e);
  }
}
