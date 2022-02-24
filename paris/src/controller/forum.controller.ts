import { Request, Response } from 'express';
import { get } from 'lodash';
import {
  allPosts,
  createComment,
  createPost,
  findPost,
  findPostAndDelete,
  findPostAndLikeOrDislike,
  findPostAndUpdate,
} from '../service/forum.service';

export const createForumPostHandler = async (req: Request, res: Response) => {
  const userId = get(req, 'user._id');
  const body = req.body;

  const post = await createPost({ ...body, user: userId });

  return res.send(post);
};

export const getAllForumPostsHandler = async (req: Request, res: Response) => {
  const posts = await allPosts();

  return res.send(posts);
};

export const getAForumPostHandler = async (req: Request, res: Response) => {
  const id = get(req, 'params.id');

  const post = await findPost({ id });

  if (!post) {
    return res.sendStatus(404);
  }

  return res.send(post);
};

export const updateForumPostHandler = async (req: Request, res: Response) => {
  const id = get(req, 'params.id');
  const userId = get(req, 'user._id');
  const update = req.body;

  const post = await findPost({ id });

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.user) !== userId) {
    return res.sendStatus(401);
  }

  const updatedPost = await findPostAndUpdate({ id }, update, { new: true });

  return res.send(updatedPost);
};

export const deleteAForumPostHandler = async (req: Request, res: Response) => {
  const id = get(req, 'params.id');
  const userId = get(req, 'user._id');

  const post = await findPost({ id });

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.user) !== userId) {
    return res.sendStatus(401);
  }

  await findPostAndDelete({ id });

  return res.status(204).send({ status: 'success' });
};

// like post
export const likePostHandler = async (req: Request, res: Response) => {
  const id = get(req, 'params.id');
  const userId = get(req, 'user._id');

  const post = await findPost({ id });

  if (!post) {
    return res.sendStatus(404);
  }

  await findPostAndLikeOrDislike({ id: post.id }, userId);

  return res.status(200).send({ status: 'success' });
};

export const createCommentHandler = async (req: Request, res: Response) => {
  const userId = get(req, 'user._id');
  const body = req.body;

  const id = get(req, 'params.id');

  const post = await findPost({ id });

  if (!post) {
    return res.sendStatus(404);
  }

  const comment = await createComment(body, id);

  return res.send(comment);
};

export const updateCommentHandler = async (req: Request, res: Response) => {
  const id = get(req, 'params.id');
  const userId = get(req, 'user._id');
  const update = req.body;

  const post = await findPost({ id });

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.user) !== userId) {
    return res.sendStatus(401);
  }

  const updatedPost = await findPostAndUpdate({ id }, update, { new: true });

  return res.send(updatedPost);
};

export const deleteCommentHandler = async (req: Request, res: Response) => {
  const id = get(req, 'params.id');
  const userId = get(req, 'user._id');

  const post = await findPost({ id });

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.user) !== userId) {
    return res.sendStatus(401);
  }

  await findPostAndDelete({ id });

  return res.status(204).send({ status: 'success' });
};
