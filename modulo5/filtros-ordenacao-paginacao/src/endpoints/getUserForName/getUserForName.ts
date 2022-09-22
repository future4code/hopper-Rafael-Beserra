import { Request, Response } from "express";
import selectUsersForName from "./queryGetUserForName";

export const getUsersForName = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    const name = req.params.name;
    const users = await selectUsersForName(name);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
