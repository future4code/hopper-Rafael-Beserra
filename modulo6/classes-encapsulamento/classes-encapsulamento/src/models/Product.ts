export class Product {
    private id: string
    private name: string
    private price: number

    constructor (id: string, name: string, price: number)
    {
        this.id = id,
        this.name = name,
        this.price = price
    }

    getId(): string{
        return this.id
    }

    getName(): string{
        return this.name
    }

    getPrice(): number{
        return this.price
    }
}