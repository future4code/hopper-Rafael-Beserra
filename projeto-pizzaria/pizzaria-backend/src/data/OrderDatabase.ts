import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { OrderItem } from "../business/model/orderItem";

export class OrderDatabase extends BaseDatabase {
    private static ORDER_ITEM = "PIZZARIA_item_Order";

    public createItemOrder = async (item: OrderItem) => {
        try {
            await OrderDatabase.connection
            .insert(item)
            .into(OrderDatabase.ORDER_ITEM);
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    };

    
}