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
    let quantity = Number(req.body.quantity)
    let user_id = req.body.userId
    let product_id = req.body.productId

    if(!user_id || !product_id || !quantity){
      throw new Error("Necessário informar todos os dados");
    }
    
    // const emailExist = await connection("labecommerce_users").select("*").where(email);
    const productExist = await connection.raw(`
      SELECT price FROM labecommerce_products
      WHERE id = "${product_id}";
    `)
    let total_price = productExist[0][0].price * quantity

    let newPurchase: Purchase = {
      id: generateId(),
      user_id,
      product_id,
      quantity,
      total_price
    };

    await connection.raw(`
      INSERT INTO labecommerce_purchases(id, user_id, product_id, quatity, total_price)
      VALUES("${newPurchase.id}", "${newPurchase.user_id}", "${newPurchase.product_id}", "${newPurchase.quantity}", "${newPurchase.total_price}");
    `)

    res.status(200).send("Produto cadastrado");
  } catch (error :any) {
    res.status(500).send(error.message);
  }
};