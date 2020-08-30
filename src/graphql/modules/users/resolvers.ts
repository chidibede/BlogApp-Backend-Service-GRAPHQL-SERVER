import { users, user, registerUser } from "./resolverFunctions";

export const resolvers = {
  Query: {
    users,
    user
  },

  Mutation: {
    registerUser,
  }
};

export default resolvers;
