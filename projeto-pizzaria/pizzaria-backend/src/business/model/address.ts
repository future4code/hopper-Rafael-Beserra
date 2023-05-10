export class Address {
    constructor(
        private id: string,
        private user_id: string,
        private street: string,
        private number: number,
        private zipcode: string
    ){
        this.id = id
    }
    getId():string{
        return this.id
    }
    getUserId():string{
        return this.user_id
    }
    getStreet():string{
        return this.street
    }
    getNumber():number{
        return this.number
    }
    getZipcode():string{
        return this.zipcode
    }
}

export interface AddressInputDTO {
    street: string,
    number: number,
    zipcode: string,
    token: string
}