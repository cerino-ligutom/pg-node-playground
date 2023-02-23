import { Knex } from 'knex';

const config: Knex.Config = {
	client: 'pg',
	connection: 'postgresql://postgres:password@db:5432/db',
	useNullAsDefault: true,
	migrations: {
		directory: './src/db/migrations',
		loadExtensions: ['.js', '.ts'],
	},
	seeds: {
		directory: './src/db/seeds',
		loadExtensions: ['.js', '.ts'],
	},

	// Modify this if you want to see the actual SQL queries executed thru knex
	debug: true,
};

export default config;
