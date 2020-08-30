import {gql} from 'apollo-server-express';

const typeDefs = gql`
    extend type Query {
        posts: [Post!]
        post(id: ID!): Post!
    }

    input CreatePostInput {
        title: String
        body: String
        username: String!
    }

    type Post{
        title: String!
        body: String
        username: String!
    }

    extend type Mutation{
        createPost(createPostInput: CreatePostInput): Post
    }
`

export default typeDefs;