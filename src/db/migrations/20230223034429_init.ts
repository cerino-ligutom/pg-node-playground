import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('password');
    table.timestamps(true, true, true);
  });

  await knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.text('content');
    table.integer('userId').unsigned().references('id').inTable('users');
    table.timestamps(true, true, true);
  });

  await knex.schema.createTable('post_comments', (table) => {
    table.increments('id').primary();
    table.text('content');
    table.integer('userId').unsigned().references('id').inTable('users');
    table.integer('postId').unsigned().references('id').inTable('posts');
    table.timestamps(true, true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('post_comments');
  await knex.schema.dropTable('posts');
  await knex.schema.dropTable('users');
}
