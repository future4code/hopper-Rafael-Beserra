import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";
import { v4 as generateId } from "uuid";

export const searchProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    let order = req.query.order as string
    let name = req.query.name as string

    if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
      order = "ASC"
    }  
    
    const Products = await connection.raw(`
      SELECT * FROM labecommerce_products
      WHERE name LIKE "%${name}%"
      ORDER BY name ${order};
    `)

    res.status(200).send(Products[0]);
  } catch (error :any) {
    res.status(500).send(error.message);
  }
};

