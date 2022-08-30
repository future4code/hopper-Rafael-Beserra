export type produto = {
    id: string,
    name:string,
    price:number
}

export const products: produto[] = [
    {
        id:'produto1',
        name:'peixe',
        price:3
    },
    {
        id:'produto2',
        name:'Sal',
        price:10
    },
    {
        id:'produto3',
        name:'Pão',
        price:5
    }
]