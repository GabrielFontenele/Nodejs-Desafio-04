import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = Array.isArray(request.headers.user_id)
        ? request.headers.user_id[0]
        : request.headers.user_id;

      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { ListAllUsersController };
