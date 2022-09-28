import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"
import { v4 as generateId } from 'uuid'

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let id = generateId()
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await connection(TABLE_USERS)
        .select()
        .where({ id: userId })

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await connection(TABLE_PRODUCTS)
        .select()
        .where({ id: productId })

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        const product = new Product(findProduct[0].id, findProduct[0].name, findProduct[0].price)
        
        const  newPurchase = new Purchase(id , userId, productId, quantity, product.getPrice() * quantity )
        // const newPurchase1: Purchase = {
        //     id: Date.now().toString(),
        //     userId,
        //     productId,
        //     quantity,
        //     totalPrice: product.price * quantity
        // }

        await connection(TABLE_PURCHASES).insert({
            id: newPurchase.getId(),
            user_id: newPurchase.getUserId(),
            product_id: newPurchase.getProductId(),
            quantity: newPurchase.getQuantity(),
            total_price: newPurchase.getTotalPrice()
        })

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}