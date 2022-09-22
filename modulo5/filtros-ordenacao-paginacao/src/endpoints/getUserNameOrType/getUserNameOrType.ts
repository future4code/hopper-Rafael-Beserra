import { Request, Response } from "express";
import selectForType from "./querySelectForType";
import selectForName from "./QuerySelectUserNameOrType";

export const getUsersForTypeOrName = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode = 400;
  try {
    let name = req.query.name as string;
    let type = req.query.type as string;
    let sort = req.query.sort as string;
    let order = "ACS";

    if (!sort) {
      sort = "email";
    }

    if (!name && !type) {
      res.statusCode = 404;
      throw new Error("Fovor informar um parametro");
    }

    const usersNameResult = await selectForName(name, sort, order);

    const usersTypeResult = await selectForType(type, sort, order);
    console.log(name);
    // console.log(users)

    if (usersNameResult.length < 1) {
      res.status(210).send(usersTypeResult);
    } else {
      if (usersTypeResult < 1) {
        res.status(220).send(usersNameResult);
      }
    }
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
