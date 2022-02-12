import { object, string } from 'yup';

const payload = {
  body: object({
    title: string().required('Title is required!'),
    body: string().required('Body is required'),
  }),
};

export const createForumPostSchema = object({
  ...payload,
});

export const updateForumPostSchema = object({
  params: object({
    id: string().required('Id of the post is required!'),
  }),
  ...payload,
});

export const deleteForumPostSchema = object({
  params: object({
    id: string().required('Id of the post is required!'),
  }),
});
