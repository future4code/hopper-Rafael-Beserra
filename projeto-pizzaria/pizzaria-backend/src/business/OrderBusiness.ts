import { OrderDatabase } from "../data/OrderDatabase";
import { UserNotFound } from "../error/customError";
import { CustomError, Unauthorized } from "../error/customError";
import { IdGeneratorInterface } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import {
  Order,
  OrderDTO,
  OrderItem,
  OrderTokenDTO
} from "./model/order";
import { OrderCartDTO, OrderItemDTO } from "./model/order";
import { ItemOrderDTO } from "./model/orderItem";
import { currentDate } from "./utilites/functions";

export class OrderBusiness {
  constructor(
    private readonly orderDatabase: OrderDatabase,
    private readonly tokenGenerator: TokenGenerator,
    private readonly idGenerator: IdGeneratorInterface
  ) {}

  public addOrder = async (input: OrderDTO) => {
    try {
      const { token, total_price } = input;

      const dataUser = this.tokenGenerator.getTokenData(token);

      if (!dataUser) {
        throw new Unauthorized();
      }

      const user_id = dataUser.id;

      const id: string = this.idGenerator.generateId();

      const createdAt = currentDate();

      const order = new Order(id, user_id, total_price, createdAt);

      await this.orderDatabase.createOrder(order);

      const order_id = id;

      return order_id;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public createItemOrder = async (
    inputTItem: OrderItemDTO,
    inputCart: OrderCartDTO[]
  ) => {
    try {
      const { token, total_price, order_id } = inputTItem;

      const cart = inputCart;

      const dataUser = this.tokenGenerator.getTokenData(token);

      if (!dataUser) {
        throw new Unauthorized();
      }

      const user_id = dataUser.id;

      if (!cart) {
        throw new CustomError(400, '"Cart" não recebido');
      }

      const createdAt = currentDate();

      const cartSize = cart.length - 1;

      for (let i = 0; i <= cartSize; i++) {
        const id = this.idGenerator.generateId();
        const item_id = cart[i].id;
        const item_title = cart[i].title;
        const item_price = cart[i].price;
        const quantity = cart[i].quantity;

        const item = new OrderItem(
          id,
          order_id,
          user_id,
          item_id,
          item_title,
          item_price,
          quantity,
          total_price,
          createdAt
        );

        await this.orderDatabase.createItemOrder(item);
      }
      return "OK";
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findAllOrderHistory = async (input: OrderTokenDTO) => {
    try {
      const { token } = input;

      if (!token) {
        throw new Unauthorized();
      }

      const { id } = this.tokenGenerator.getTokenData(token);

      if (!id) {
        throw new UserNotFound();
      }

      const user_id = id;

      const result = await this.orderDatabase.orderHistory(user_id);

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findItemOrderByOrderId = async (input: ItemOrderDTO) => {
    try {
      const { token, order_id } = input;

      const dataUser = this.tokenGenerator.getTokenData(token);

      if (!dataUser) {
        throw new Unauthorized();
      }

      const result = await this.orderDatabase.findItemOrderOrderId(order_id);

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
