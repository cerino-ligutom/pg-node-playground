import { Knex } from 'knex';
import { faker } from '@faker-js/faker';
import type { Post, PostComment, User } from '../../types';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('posts').del();
  await knex('post_comments').del();

  // Inserts seed entries
  const userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  for (let i = 0; i < 10; i++) {
    userData.push({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
  }

  const users = await knex<User>('users').insert(userData).returning('*');

  const postData: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  for (const user of users) {
    for (let i = 0; i < 10; i++) {
      postData.push({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        userId: user.id,
      });
    }
  }

  const posts = await knex<Post>('posts').insert(postData).returning('*');

  const postCommentData: Omit<PostComment, 'id' | 'createdAt' | 'updatedAt'>[] = [];
  for (const post of posts) {
    for (let i = 0; i < 10; i++) {
      postCommentData.push({
        content: faker.lorem.sentence(),
        userId: faker.helpers.arrayElement(users).id,
        postId: post.id,
      });
    }
  }

  const postComments = await knex<PostComment>('post_comments').insert(postCommentData).returning('*');

  console.log('Seeded', users.length, 'users');
  console.log('Seeded', posts.length, 'posts');
  console.log('Seeded', postComments.length, 'post comments');
}
