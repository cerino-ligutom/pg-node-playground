import config from '../knexfile';
import { knex } from 'knex';

export const pgKnex = knex(config);
