import { Request, Response } from "express";
import selectUsersForType from "./queryGetUserForType";

export const getUsersForType = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    const type = req.params.type;

    const users = await selectUsersForType(type);

    if (!type) {
      res.statusCode = 404;
      throw new Error("Tipo não encontrado");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};