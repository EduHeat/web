import { Express, Response, Request } from "express";

export default function(app: Express) {
  // health check route
  app.get('/', (req: Request, res: Response) => {
    res.send({ status: 200 });
  });
}