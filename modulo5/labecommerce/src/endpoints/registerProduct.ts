import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types";
import { v4 as generateId } from "uuid";

export const registerProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const { name, price, image_url } = req.body;

    if(!name || !price || !image_url){
      throw new Error("Necessário informar todos os dados");
    }
    
    // const emailExist = await connection("labecommerce_users").select("*").where(email);

    const productExist = await connection.raw(`
      SELECT email FROM labecommerce_products
      WHERE name = "${name}";
    `)

    if(productExist[0].length > 0){
      throw new Error("Email Já cadastrado"); 
    }

    console.log(productExist[0])

    let newProduct: Product = {
      id: generateId(),
      name,
      price,
      image_url
    };

    await connection.raw(`
      INSERT INTO labecommerce_products(id, name, price, image_url)
      VALUES("${newProduct.id}", "${newProduct.name}", "${newProduct.price}", "${newProduct.image_url}");
    `)

    res.status(200).send("Produto cadastrado");
  } catch (error :any) {
    res.status(500).send(error.message);
  }
};