import {buildSchema} from 'graphql';
export const schema = buildSchema(`
  type WordsSchema {
    id: ID!
    name: String!
    title: String!
  }

  type Query {
    Words(criteriaStr: String): [WordsSchema]
  }
  
`);

