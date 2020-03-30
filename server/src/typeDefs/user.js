import { gql } from 'apollo-server-express'

export default gql`
    extend type Query{
        me: User @auth
        user(id: ID!): User @auth
        users: [User!]! @hasRole( roles: ["Super-Admin"])
    }

    extend type Mutation {
        signUp(email: String!, username: String!, name: String!, password: String!): User @guest
        signIn(email: String!, password: String!): User @guest
        signOut: Boolean @auth
    }

    type User {
        id: ID!
        email: String!
        username: String!
        name: String!
        roles: [Role!]!
        createdAt: String!
    }`
