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

export const postCommentSchema = object({
  body: object({
    content: string().required("Content of the comment can't be empty")
  }),
  params: object({
    id: string().required('Id of the post is required!'),
  })
})

export const updateCommentSchema = object({
  body: object({
    content: string().required("Content of the comment can't be empty")
  }),
  params: object({
    id: string().required('Id of the post is required!'),
    commentId: string().required("Id of the comment is required")
  })
})

export const deleteCommentSchema = object({
  params: object({
    id: string().required('Id of the post is required!'),
    commentId: string().required("Id of the comment is required")
  })
})