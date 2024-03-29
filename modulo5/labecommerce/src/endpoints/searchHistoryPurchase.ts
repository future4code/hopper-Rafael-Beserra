import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

export const searchHistoryPurchase = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const user_id = req.params.userId;

    const idExist = await connection.raw(`
        SELECT user_id FROM labecommerce_purchases
        WHERE user_id = "${user_id}";
    `)

    if(idExist.length < 0){
      throw new Error("Usuário não encontrado");
    }

    const historyPurchase = await connection("labecommerce_purchases").select("*").where("user_Id", "like", `%${user_id}%`);

    res.status(200).send(historyPurchase[0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};  