import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import Post, { PostDocument } from '../model/forum.model';

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
