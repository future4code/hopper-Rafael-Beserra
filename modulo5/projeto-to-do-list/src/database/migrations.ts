import connection from "./connection";

const criarTodoListUser = async () => {
    try {
        await connection.raw(`
            CREATE TABLE TodoListUser (
                id VARCHAR(255) PRIMARY KEY, 
                name VARCHAR(255) NULL, 
                nickname VARCHAR(255) UNIQUE NOT NULL, 
                email VARCHAR(255) UNIQUE NOT NULL
            );
        `)

        console.log("Tabela Produtos criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Produtos.")
        console.log(error.sqlMessage)
    }
}

const criarTodoListTask = async () => {
    try {
        await connection.raw(`
            CREATE TABLE TodoListTask (
                id VARCHAR(255) PRIMARY KEY, 
                title VARCHAR(255) NOT NULL, 
                description TEXT NOT NULL, 
                status VARCHAR(255) NOT NULL DEFAULT "to_do",
                limit_date DATE NOT NULL,
                creator_user_id varchar(255) NOT NULL,
                FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
            );
        `)
    } catch (error) {
        console.log("Erro ao criar TodoListTask.")
        console.log(error.sqlMessage)
    }
}

const criarTodoListResponsibleUserTaskRelation = async () => {
    try {
        await connection.raw(`
            CREATE TABLE TodoListResponsibleUserTaskRelation (
                task_id VARCHAR(255),
                responsible_user_id VARCHAR(255),
                FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
                FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
            );
        `)
    } catch (error) {
        console.log("Erro ao criar TodoListTask.")
        console.log(error.sqlMessage)
    }
}


// async function popularTabelaProdutos() {
//     try {
//         await connection.raw(`
//             INSERT INTO Produtos (id, nome, preco, categoria)
//             VALUES 
//             (1, "Chinelo", 19.99, "calçados"),
//             (2, "Relógio", 30.00, "acessórios"),
//             (3, "Boné", 25.00, "acessórios"),
//             (4, "Camiseta", 49.99, "roupas"),
//             (5, "Calça", 99.00, "roupas");
//         `)
        
//         console.log("Tabela Produtos populada com sucesso.")
//     } catch (error) {
//         console.log("Erro ao popular tabela Produtos.")
//         console.log(error.sqlMessage)
//     }
// }

criarTodoListResponsibleUserTaskRelation()
.then(() => console.log("tabela criada"))
.finally(() => process.exit())
// criarTodoListUser()
// .then(() => popularTabelaProdutos())
// .finally(() => process.exit())