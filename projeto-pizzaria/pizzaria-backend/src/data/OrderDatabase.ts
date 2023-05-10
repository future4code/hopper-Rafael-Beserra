import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { OrderItem, OrderUserId } from "../business/model/order";
import { Order } from "../business/model/order";
import { ItemOrderId } from "../business/model/orderItem";

export class OrderDatabase extends BaseDatabase {
  private static TABLE_ITEM = "PIZZARIA_Item_Order";
  private static TABLE_ORDER = "PIZZARIA_Order";

  public createOrder = async (order: Order) => {
    try {
      const result = await OrderDatabase.connection
        .insert(order)
        .into(OrderDatabase.TABLE_ORDER);

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public createItemOrder = async (item: OrderItem) => {
    try {
      await OrderDatabase.connection
        .insert(item)
        .into(OrderDatabase.TABLE_ITEM);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public orderHistory = async (user_id: string) => {
    try {
      const result = await OrderDatabase.connection(OrderDatabase.TABLE_ORDER)
        .select("*")
        .where({ user_id });

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findItemOrderOrderId = async (order_id: string) => {
    try {
      const result = await OrderDatabase.connection(OrderDatabase.TABLE_ITEM)
        .select("*")
        .where({ order_id });

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
