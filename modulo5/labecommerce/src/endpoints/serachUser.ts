import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";
import { v4 as generateId } from "uuid";

export const searchUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    let order = req.params.order

    if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
      order = "ASC"
    }    

    const allUsers = await connection.raw(`
      SELECT * FROM labecommerce_users
      ORDER BY 
    `)

    res.status(200).send(allUsers[0]);
  } catch (error :any) {
    res.status(500).send(error.message);
  }
};