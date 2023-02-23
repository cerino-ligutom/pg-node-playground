import { Model, RelationMappings, RelationMappingsThunk } from 'objection';
import { BaseObjectionModel } from './common/objection-model';
import { Post } from './post';
import { User } from './user';

export class PostComment extends BaseObjectionModel {
  static tableName = 'post_comments';

  static relationMappings: RelationMappings | RelationMappingsThunk = {
    post: {
      relation: Model.BelongsToOneRelation,
      modelClass: Post,
      join: {
        from: 'post_comments.postId',
        to: 'posts.id',
      },
    },

    author: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'post_comments.userId',
        to: 'users.id',
      },
    },
  };

  id!: number;
  content!: string;
  userId!: number;
  postId!: number;
  createdAt!: Date;
  updatedAt!: Date;
}
