export interface PostComment {
  id: number;
  content: string;
  userId: number;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
}
