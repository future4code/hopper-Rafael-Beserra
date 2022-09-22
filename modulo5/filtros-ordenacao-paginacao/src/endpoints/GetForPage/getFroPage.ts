import { Request, Response } from "express";
import selectForPage from "./quertGetFroPage";

export const getPages = async (req: Request, res: Response): Promise<void> => {
  let statusCode = 400;
  let InPage = Number(req.params.page);
  let name = "%";
  let sort = "email";
  let order = "ACS";
  let page = 5 * (InPage - 1);
  try {
    const users = await selectForPage(name, sort, order, page);
    console.log(users);

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
