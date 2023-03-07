import { OrderDatabase } from "../data/OrderDatabase";
import { CustomError, Unauthorized } from "../error/customError";
import { IdGeneratorInterface } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import { OrderItem, OrderItemDTO } from "./model/orderItem";

export class OrderBusiness {
    constructor(
        private readonly orderDatabase: OrderDatabase,
        private readonly tokenGenerator: TokenGenerator,
        private readonly idGenerator: IdGeneratorInterface
    ){}

    public createItemOrder = async (input: OrderItemDTO) => {
        try {
            const {id_item, quantity, token} = input

            const idUser = this.tokenGenerator.getTokenData(token);
            if(!idUser){
                throw new Unauthorized();
            }

            if(!id_item || !quantity){
                throw new CustomError(
                    400,
                    'Preencha os campos "idItem" e "quantity"'
                )
            }

            // verificar se id_item existe

            const id: string = this.idGenerator.generateId();

            const createAt = new Date();

            const orderItem = new OrderItem(
                id,
                id_item,
                quantity,
                createAt
            )
            
            await this.orderDatabase.createItemOrder(orderItem)
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }
}