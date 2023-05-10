export class OrderItem {
  constructor(
    private id: string,
    private order_id: string,
    private user_id: string,
    private item_id: string,
    private item_title: string,
    private item_price: number,
    private quantity: number,
    private total_price: number,
    private createdAt: string
  ) {
    // this.id = id;
  }
  getId(): string {
    return this.id;
  }

  getOrderId(): string {
    return this.order_id;
  }

  getUserId(): string {
    return this.user_id;
  }

  getItemId(): string {
    return this.item_id;
  }

  getItemTitle(): string {
    return this.item_title;
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

  getCreatedAt(): string {
    return this.createdAt;
  }
}

export interface OrderDTO {
  token: string;
  total_price: number;
}

export interface OrderItemDTO {
  token: string;
  total_price: number;
  order_id: string;
}

export interface OrderCartDTO {
  author_id: string;
  createdAt: string;
  description: string;
  id: string;
  image: string;
  price: number;
  quantity: number;
  title: string;
}

export interface OrderCartDTO {
  id: string;
  order_id: string;
  user_id: string;
  item_id: string;
  item_title: string;
  item_price: number;
  quantity: number;
  total_price: number;
  createdAt: string;
}

export class Order {
  constructor(
    private id: string,
    private user_id: string,
    private total_price: number,
    private createdAt: string
  ) {}
  getId(): string {
    return this.id;
  }

  getUserId(): string {
    return this.user_id;
  }

  getTotalPrice(): number {
    return this.total_price;
  }

  getCreatedAt(): string {
    return this.createdAt;
  }
}

export type OrderUserId = {
  user_id:string
}

export interface OrderTokenDTO {
  token: string;
}
