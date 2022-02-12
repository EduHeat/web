import { Express, Response, Request } from "express";
import { createUserHandler, deleteUserHandler } from "./controller/user.controller";
import { createUserSessionHandler, invalidateUserSessionHandler, getUserSessionsHandler } from "./controller/session.controller"
import { validateRequest } from "./middleware";
import { createUserSchema, createUserSessionSchema } from "./schemas/user.schema";
import requiresUser from "./middleware/requireUser";

export default function(app: Express) {
  // health check route
  app.get('/', (req: Request, res: Response) => {
    res.send({ status: 200 });
  });

  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  // login
  app.post("/api/sessions", validateRequest(createUserSessionSchema), createUserSessionHandler);
  // get sessions
  app.get("/api/sessions", requiresUser, getUserSessionsHandler);
  //logout
  app.delete("/api/sessions", requiresUser, invalidateUserSessionHandler);
  
  app.delete("/api/users", deleteUserHandler);
}