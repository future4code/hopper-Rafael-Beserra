import { Request, Response } from "express";
import { OrderItemDTO } from "../business/model/orderItem";
import { OrderBusiness } from "../business/OrderBusiness";

export class OrderController {
    constructor(
        private readonly orderBusiness: OrderBusiness
    ){}

    public createOrderItem = async (req: Request, res: Response) => {
        try {
            const input: OrderItemDTO = {
                id_item: req.body.idItem,
                quantity: req.body.quantity,
                token: req.headers.authorization as string
            }

            const item = await this.orderBusiness.createItemOrder(input);

            res.status(200).send({message: "Item criado com sucesso", item})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}