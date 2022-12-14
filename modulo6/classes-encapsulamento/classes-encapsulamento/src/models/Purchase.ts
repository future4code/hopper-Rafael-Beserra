import { strict } from "assert"

// type para tipar no typescript com camelCase
export class Purchase {
    private id: string
    private userId: string
    private productId: string
    private quantity: number
    private totalPrice: number

    constructor (id: string, userId: string, productId: string, quantity: number, totalPrice: number)
    {
        this.id = id,
        this.userId = userId,
        this.productId = productId,
        this.quantity = quantity,
        this.totalPrice = totalPrice
    }

    getId(): string{
        return this.id
    }

    getUserId(): string{
        return this.userId
    }

    getProductId(): string{
        return this.productId
    }

    getQuantity(): number{
        return this.quantity
    }

    getTotalPrice(): number{
        return this.totalPrice
    }
}


// type para tipar no banco de dados com snake_case
export class PurchaseDB {
    private id: string
    private user_id: string
    private product_id: string
    private quantity: number
    private total_price: number

    constructor (id: string, user_id: string, product_id: string, quantity: number, total_price: number)
    {
        this.id = id,
        this.user_id = user_id,
        this.product_id = product_id,
        this.quantity = quantity,
        this.total_price = total_price
    }

    getId(): string{
        return this.id
    }

    getUser_Id(): string{
        return this.user_id
    }

    getProduct_Id(): string{
        return this.product_id
    }

    getQuantity(): number{
        return this.quantity
    }

    getTotal_Price(): number{
        return this.quantity
    }
}