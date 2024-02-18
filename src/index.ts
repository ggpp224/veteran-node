import express from 'express';
import dotenv from 'dotenv';

import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from "graphql";
import mysql from 'mysql';
import {schema} from "./schema.js";


dotenv.config();

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});


const app = express();
const port = process.env.PORT||3000;

/*// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return "Hello world!"
    },
}*/

const root = {
    Words: (obj, args, context, info) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM words', (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results);
            });
        });
    },
};


app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)



app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});