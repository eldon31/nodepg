require('dotenv').config()
const { Pool } = require('pg')
const pool = new Pool({
    user: `${process.env.DB_USER}`,
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`,
    password: `${process.env.DB_PASSWORD}`,
    port: 5432,
    ssl: {rejectUnauthorized:false},
})

pool.query(`SELECT pet_name, name, occupation
from "bayacag_db2".pets
INNER JOIN "bayacag_db2".owners
ON pets.owner_id = owners.owner_id
WHERE occupation = 'Programmer';`, (error,results) => {
    if(error) {
        throw error
    }
    console.log(results.rows)
})