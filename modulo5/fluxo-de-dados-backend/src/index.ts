import express, {Request, Response} from 'express';
import cors from 'cors'
import { produto, products } from './data';
import { v4 as generateId } from 'uuid';

const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", (req: Request, res: Response) => {
    let statusCode = 500
    try {
        return res.status(200).send("teste ok")
    } catch (error) {
        return res.status(statusCode).send("Servidor offline")
    }
})

app.post("/produtos/adicionar", (req: Request, res: Response) => {
    let statusCode = 500
    try {
        const {name, price} = req.body
        
        if(!name || !price) {
            statusCode = 409
            throw new Error("Necessário informar name e price")
        }

        if(typeof name !== 'string' || typeof price !== 'number' || price <= 0){
            statusCode = 422
            throw new Error("Parâmentros inseridos inválidos");
        }

        const produtoExiste = products.find(product => product.name === name)
        if (produtoExiste) {
            statusCode = 409
            throw new Error("Produto já existe")
        }
        
        const newProduct = {
            id:generateId(),
            name,
            price
        }

        products.push(newProduct)

        res.status(201).send(products)

    } catch (error: any) {
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})

app.get("/produtos", (req: Request, res: Response) => {
    let statusCode = 500
    try {
        if(products){
            statusCode = 200
            return res.status(statusCode).send(products)
        }
    } catch (error: any) {
        statusCode = 404
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})

app.put("/produtos", (req: Request, res: Response) => {
    let statusCode = 500
    try {
        const prductId = req.query.id
        let newPrice = Number(req.body.price)
        let newName: string = req.body.name

        if(!prductId){
            statusCode = 401
            throw new Error("Nome do produto obrigatórios");
        }

        const productEdit = products.find(prod => prod.id === prductId)
        if(!productEdit){
            statusCode = 401
            throw new Error("Produto inexistente");
        }

        let position = products.findIndex(indi => indi === productEdit)
        if(!newName){
            newName= products[position].name
        }

        if(!newPrice){
            newPrice=products[position].price
        }

        if(newPrice || newName || newPrice <= 0){
            products.map(prod => {
                if(prod.id === prductId){
                    prod.price = newPrice
                    prod.name = newName
                }
                return prod
            })
            statusCode = 201
            return res.status(statusCode).send(products)
        } else {
            if(newPrice || !newName || newPrice <= 0){
                products.map(prod => {
                    if(prod.id === prductId){
                        prod.name = newName
                        prod.price = newPrice
                    }
                    return prod
                })
                statusCode = 201
                return res.status(statusCode).send(products)
            } else {
                if(!newPrice || newName){
                    products.map(prod => {
                        if(prod.id === prductId){
                            prod.name = newName
                            prod.price = newPrice
                        }
                        return prod
                    })
                    statusCode = 201
                    return res.status(statusCode).send(products)
                }else{
                    statusCode = 401
                    throw new Error("Impossível editar produtos com dados informados");
                }
            }
        }

        // statusCode = 201
        // return res.status(statusCode).send(products)

    } catch (error: any) {
        statusCode = 401
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})

app.delete("/produtos/delete", (req: Request, res: Response) =>{
    let statusCode = 500
    try {
        const prductId = req.query.id

        if(!prductId){
            statusCode = 401
            throw new Error("Id é obrigatórios");
        }

        const productEdit = products.find(prod => prod.id === prductId)

        let position = products.findIndex(indi => indi === productEdit)

        products.splice(position, 1)

        statusCode = 201
        return res.status(statusCode).send(products)
    } catch (error: any) {
        statusCode = 401
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})


app.listen(3003, () => {
 console.log("Server is running in http://localhost:3003");
});
