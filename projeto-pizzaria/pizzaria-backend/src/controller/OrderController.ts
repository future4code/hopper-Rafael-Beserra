import { Request, Response } from "express";
import {
  OrderCartDTO,
  OrderDTO,
  OrderItemDTO,
  OrderTokenDTO,
} from "../business/model/order";
import { ItemOrderDTO } from "../business/model/orderItem";
import { OrderBusiness } from "../business/OrderBusiness";

export class OrderController {
  constructor(private readonly orderBusiness: OrderBusiness) {}

  public createOrderItem = async (req: Request, res: Response) => {
    try {
      const inputt: OrderDTO = {
        token: req.headers.authorization as string,
        total_price: Number(req.params.totalprice),
      };

      const inputCart: OrderCartDTO[] = req.body;

      const resultOrder = await this.orderBusiness.addOrder(inputt);

      const order_id = resultOrder as string;

      const inputTItem: OrderItemDTO = {
        token: req.headers.authorization as string,
        total_price: Number(req.params.totalprice),
        order_id,
      };

      const resultItemOrder = await this.orderBusiness.createItemOrder(
        inputTItem,
        inputCart
      );

      if (resultItemOrder === "OK") {
        res.status(200).send({ message: "Item criado com sucesso" });
      }
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public findAllOrderHistory = async (req: Request, res: Response) => {
    try {
      const input: OrderTokenDTO = {
        token: req.headers.authorization as string,
      };

      const orders = await this.orderBusiness.findAllOrderHistory(input);

      res.status(200).send({ message: "Item criado com sucesso", orders });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public findItemOrderByOrderId = async (req: Request, res: Response) => {
    try {
      const input: ItemOrderDTO = {
        token: req.headers.authorization as string,
        order_id: req.params.orderid as string,
      };

      const itens = await this.orderBusiness.findItemOrderByOrderId(input);

      res.status(200).send({ message: "consulta realizada", itens });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
