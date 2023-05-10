export class OrderItem {
  constructor(
    private id: string,
    private item_id: string,
    private item_name: string,
    private item_price: number,
    private quantity: number,
    private total_price: number,
    private createdAt: Date
  ) {}
  getId(): string {
    return this.id;
  }

  getItemId(): string {
    return this.item_id;
  }

  getItemName(): string {
    return this.item_name;
  }

  getItemPrice(): number {
    return this.item_price;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getTotalPrice(): number {
    return this.total_price;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }
}

export interface ItemOrderDTO {
  token: string;
  order_id: string;
}

export class OrderCart {
  constructor(
    private id: string,
    private author_id: string,
    private createAt: string,
    private description: string,
    private title: string,
    private price: number,
    private image: string,
    private quantity: number
  ) {}
}

export interface OrderCartDTO {
  cart: OrderCart;
}

export interface ItemOrderId {
  id: string;
}

export interface ItemOrderTokenDTO {
  token: string;
}
