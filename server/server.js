const express = require("express");
const { randomUUID } = require("crypto");
const { response } = require("express");

const app = express();
const products = [];

app.use(express.json())

// Inserir os dados no banco

app.post("/products", (request, response) => {
    const { name,price } = request.body;
    const product = {
        name,
        price,
        id: randomUUID(),
    }
    products.push(product);
    return response.json(product);
});

//Pegar todas as informações e buscar por ID

app.get("/products", (request, response) => {
    return response.json(products);
})

app.get("/products/:id", (request, response) => {
    const {id } = request.params;
    const product = products.find(product => product.id === id);
    return response.json(product)
})

//Alterar os dados

app.put("/products/:id", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;

    const productIndex = products.findIndex(product => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name,
        price,
    };

    return response.json({message: "Produto alterado com sucesso"})
});

//Deletar os dados

app.delete("/products/:id", (request, response) => {
    const { id } = request.params;
    const productIndex = products.findIndex((product) => product.id === id);
    
    products.splice(productIndex, 1)

    return response.json({message: "Produto removido com sucesso"})
})

app.listen(4002, () => console.log("Servidor esta rodando na porta 4002"));