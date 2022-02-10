import { Express, Response, Request } from "express";
import { createUserHandler, deleteUserHandler } from "./controller/user.controller";
import { validateRequest } from "./middleware";
import { createUserSchema } from "./schemas/user.schema";

export default function(app: Express) {
  // health check route
  app.get('/', (req: Request, res: Response) => {
    res.send({ status: 200 });
  });

  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);
  app.delete("/api/users", deleteUserHandler);
}