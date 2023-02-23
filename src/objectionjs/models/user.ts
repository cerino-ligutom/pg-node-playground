import { Model, RelationMappings, RelationMappingsThunk } from 'objection';
import { BaseObjectionModel } from './common/objection-model';
import { Post } from './post';

export class User extends BaseObjectionModel {
  static tableName = 'users';

  static relationMappings: RelationMappings | RelationMappingsThunk = {
    posts: {
      relation: Model.HasManyRelation,
      modelClass: Post,
      join: {
        from: 'users.id',
        to: 'posts.userId',
      },
    },
  };

  id!: number;
  name!: string;
  email!: string;
  password!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
