import { users, user, registerUser, loginUser } from "./resolverFunctions";

export const resolvers = {
  Query: {
    users,
    user
  },

  Mutation: {
    registerUser,
    loginUser
  }
};

export default resolvers;
