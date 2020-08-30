import {gql} from 'apollo-server-express';

const typeDefs = gql`
    extend type Query {
        users: [User!]
        user(id: ID!): User!
    }

    input RegisterUserInput {
        firstname: String
        lastname: String
        username: String!
        email: String!
        password: String!
    }

    type User{
        firstname: String
        lastname: String
        username: String!
        email: String!
        password: String!
    }

    extend type Mutation{
        registerUser(registerInput: RegisterUserInput): User
    }
`

export default typeDefs;