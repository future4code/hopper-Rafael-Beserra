export class OrderItem {
    constructor(
        private id: string,
        private id_item: string,
        private quantity: number,
        private cratedAt: Date
    ){}
    getId():string{
        return this.id
    }

    getIdItem():string{
        return this.id_item
    }

    getQuantity():number{
        return this.quantity
    }

    getCratedAt():Date{
        return this.cratedAt
    }
}

export interface OrderItemDTO{
    id_item: string;
    quantity: number;
    token: string;
}