import { Model, RelationMappings, RelationMappingsThunk } from 'objection';
import { BaseObjectionModel } from './common/objection-model';
import { PostComment } from './post-comment';
import { User } from './user';

export class Post extends BaseObjectionModel {
  static tableName = 'posts';

  static relationMappings: RelationMappings | RelationMappingsThunk = {
    author: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'posts.userId',
        to: 'users.id',
      },
    },

    comments: {
      relation: Model.HasManyRelation,
      modelClass: PostComment,
      join: {
        from: 'posts.id',
        to: 'post_comments.postId',
      },
    },
  };

  id!: number;
  title!: string;
  content!: string;
  userId!: number;
  createdAt!: Date;
  updatedAt!: Date;
}
