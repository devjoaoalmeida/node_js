const mysql = require('mysql');
const dotemv = require('dotenv');
let instance = null;

dotemv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,   
    password: process.env.PASSWORD,  
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
}); 

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM crudapp;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results); 
                })
            });
            
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async insertNewName(nome) {
        try {
            const data = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO crudapp (nome,data) VALUES (?,?);";

                connection.query(query, [nome, data] ,(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results.insertId); 
                })
            });
            return {
                id : insertId,
                nome: nome,
                data : data
            };
        } catch (error) {
            console.log(error)
        }
    }

    async deleteRowById(id){
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM crudapp WHERE id = ?;";

                connection.query(query, [id] ,(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results.affectedRow); 
                })
            });

            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async updateNameById(id, nome) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE crudapp SET nome = ? WHERE id = ?";

                connection.query(query, [nome, id] , (err,results) => {
                    if (err) reject(new Error (err.message));
                    resolve(results.affectedRows);
                })
            });

            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async searchByName(nome){
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM crudapp WHERE nome = ?;";

                connection.query(query, [nome], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results); 
                })
            });
            
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = DbService;