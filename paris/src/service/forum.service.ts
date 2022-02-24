import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import Post, { CommentDocument, PostDocument } from '../model/forum.model';

export const createPost = async (input: DocumentDefinition<PostDocument>) => {
  return Post.create(input);
};

export const findPost = async (
  input: FilterQuery<PostDocument>,
  opts: QueryOptions = { lean: true }
) => {
  return Post.findOne(input, {}, opts);
};

export const findPostAndUpdate = async (
  input: FilterQuery<PostDocument>,
  update: UpdateQuery<PostDocument>,
  opts: QueryOptions
) => {
  return Post.findOneAndUpdate(input, update, opts);
};

export const findPostAndDelete = async (input: FilterQuery<PostDocument>) => {
  return Post.deleteOne(input);
};

export const allPosts = async () => {
  return Post.find({});
};

export const findPostAndLikeOrDislike = async (
  input: FilterQuery<PostDocument>,
  userId: string
) => {
  const post = await Post.findOne(input).exec();
  let likes: string[] = post!.likes;
  const isThere = likes.find((id: string) => id === userId);
  if (isThere) {
    likes = likes.filter((id: string) => id !== userId);
  } else {
    likes = likes.concat(userId);
  }
  return Post.findOneAndUpdate(input, { likes });
};

export const createComment = async (input: CommentDocument, postId: string) => {
  const post = await Post.findOne({ id: postId }).exec();
  post!.comments.push(input);
  post!.save();
};

export const updateComment = async (
  input: CommentDocument,
  postId: string,
  commentId: string
) => {
  const post = await Post.findOne({ id: postId }).exec();

  post!.save();
};

export const deleteComment = async (
  input: CommentDocument,
  postId: string,
  commentId: string
) => {
  const post = await Post.findOne({ id: postId }).exec();
  post!.comments.push(input);
  post!.save();
};
