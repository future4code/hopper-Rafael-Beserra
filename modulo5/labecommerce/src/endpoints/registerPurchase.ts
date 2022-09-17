import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product, Purchase } from "../types";
import { v4 as generateId } from "uuid";

export const registerPurchase = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    let { user_id, product_id, quantity } = req.body;

    if(!user_id || !product_id || !quantity){
      throw new Error("Necessário informar todos os dados");
    }
    
    // const emailExist = await connection("labecommerce_users").select("*").where(email);

    let total_price = 0

    let newPurchase: Purchase = {
      id: generateId(),
      user_id,
      product_id,
      quantity,
      total_price
    };

    await connection.raw(`
      INSERT INTO labecommerce_purchases(id, name, price, image_url)
      VALUES("${newPurchase.id}", "${newPurchase.user_id}", "${newPurchase.product_id}", "${newPurchase.quantity}", "${newPurchase.total_price}");
    `)

    res.status(200).send("Produto cadastrado");
  } catch (error :any) {
    res.status(500).send(error.message);
  }
};