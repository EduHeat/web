import { Express, Response, Request } from 'express';
import {
  createUserHandler,
  deleteUserHandler,
} from './controller/user.controller';
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from './controller/session.controller';
import { validateRequest } from './middleware';
import {
  createUserSchema,
  createUserSessionSchema,
} from './schemas/user.schema';
import requiresUser from './middleware/requireUser';
import {
  createForumPostHandler,
  deleteAForumPostHandler,
  getAForumPostHandler,
  getAllForumPostsHandler,
  updateForumPostHandler,
} from './controller/forum.controller';
import {
  createForumPostSchema,
  deleteForumPostSchema,
  updateForumPostSchema,
} from './schemas/forum.schema';

export default function (app: Express) {
  // health check route
  app.get('/', (req: Request, res: Response) => {
    res.send({ status: 200 });
  });

  // ---------------- users ----------------
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);
  app.delete('/api/users', deleteUserHandler);

  // ---------------- auth ----------------
  app.post(
    '/api/sessions',
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );
  app.get('/api/sessions', requiresUser, getUserSessionsHandler);
  app.delete('/api/sessions', requiresUser, invalidateUserSessionHandler);


  // ---------------- FORUM -----------------
  app.post(
    '/api/forums',
    [requiresUser, validateRequest(createForumPostSchema)],
    createForumPostHandler
  );
  app.get('/api/forums/', getAllForumPostsHandler);
  app.get('/api/forums/:id', getAForumPostHandler);
  app.put(
    '/api/forums/:id',
    [requiresUser, validateRequest(updateForumPostSchema)],
    updateForumPostHandler
  );
  app.delete(
    '/api/forums/:id',
    [requiresUser, validateRequest(deleteForumPostSchema)],
    deleteAForumPostHandler
  );
}
