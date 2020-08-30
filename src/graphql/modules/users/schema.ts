import { gql } from "apollo-server-express";

const typeDefs = gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User!
  }

  type User {
    username: String
    email: String
    password: String
    token: String
  }

  type RegisterUserResponse {
    message: String!
    newUser: User
  }

  type LoginUserResponse {
    message: String!
    user: User!
  }

  extend type Mutation {

    registerUser(
      username: String!
      email: String!
      password: String!
    ): RegisterUserResponse

    loginUser(email: String, password: String): LoginUserResponse!
  }
`;

export default typeDefs;
