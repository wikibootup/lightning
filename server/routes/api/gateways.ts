import { Router, Response, Request } from "express";

const gatewaysRouter: Router = Router();

gatewaysRouter.get("/", (req: Request, res: Response) => {
  res.send('routed correctly.');
});

export { gatewaysRouter };
