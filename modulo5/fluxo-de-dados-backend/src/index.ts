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
        // console.log("/test")
        return res.status(200).send("teste ok")
    } catch (error) {
        return res.status(statusCode).send("Servidor offline")
    }
})

app.post("/produtos/adicionar", (req: Request, res: Response) => {
    let statusCode = 500
    try {
        const {name, price} = req.body
        if(!name || !price) throw new Error("Necessário informar name e price");

        const produtoExiste = products.find(product => product.name === name)
        if (produtoExiste) {
            console.log
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
        const newPrice = req.body
        if(!prductId || !newPrice){
            statusCode = 401
            throw new Error("Id e novo preço são obrigatórios");
        }

        const productEdit = products.find(prod => prod.id === prductId)
        if(!productEdit){
            statusCode = 401
            throw new Error("Produto inexistente");
        }
        
        products.map(prod => {
            if(prod.id === prductId){
                return prod.price = newPrice
            }
            return prod
        })

        statusCode = 201
        return res.status(statusCode).send(products)

    } catch (error: any) {
        statusCode = 401
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})

app.delete("/produtos/delete", (req: Request, res: Response) =>{
    let statusCode = 500
    try {
        const prductId = req.query.id
        const permission = req.headers.Authorization

        if(!prductId){
            statusCode = 401
            throw new Error("Id é obrigatórios");
        }
        // if(!permission){
        //     statusCode = 401
        //     throw new Error("Login Obrigatório");
        // }


        const newProducts = products.filter(prod => {
            if(prod.id !== prductId){
                return prod
            }
        })
        
        statusCode = 201
        return res.status(statusCode).send(newProducts)
    } catch (error: any) {
        statusCode = 401
        return res.status(statusCode).send({ message: error.message, status: statusCode })
    }
})


app.listen(3003, () => {
 console.log("Server is running in http://localhost:3003");
});
