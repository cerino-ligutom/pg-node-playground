import { pgKnex } from './pg-knex';
import type { Post, PostComment, User } from '../types';

const Post = pgKnex<Post>('posts');
const PostComment = pgKnex<PostComment>('post_comments');
const User = pgKnex<User>('users');

// Play with the models
(async () => {
  // const posts = await Post.select('*');
  // console.log(posts);
})();
