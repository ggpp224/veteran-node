import express from 'express';
import dotenv from 'dotenv';

import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from "graphql";

dotenv.config();

const app = express();
const port = process.env.PORT||3000;

// Construct a schema, using GraphQL schema language
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
}


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