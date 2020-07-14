import { gql } from "apollo-server";

const typeDefs = gql`
  type Chef {
    id: ID!
    name: String!
    restaurants: [Restaurant!]!
  }

  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    phone: String!
    tasks: [Task!]!
  }

  type Task {
    id: ID!
    name: String!
  }
  type Restaurant {
    id: ID!
    name: String!
  }

  type Mutation {
    createChef(name: String!): Chef!
    createRestaurant(chefId: ID!, name: String!): Restaurant!
    createUser(username: String!,password: String!,email: String!,phone: String!): User!
    createTask(userId: ID!, name: String!): Task!
  }
 

  type Query {
    chefs: [Chef!]!
    users: [User!]!

  }
  
`;

export default typeDefs;
