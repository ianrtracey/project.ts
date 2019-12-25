import { IResolvers } from "graphql-tools";
import { User } from "./models/user.model";
import { MongooseDocument } from "mongoose";

const resolvers: IResolvers = {
  Query: {
    helloWorld: (_: void, args: void): string => {
      return "Hi! 👋";
    },
    users: (_: void, args: void) => {
      return User.find({}, (error: Error, user: MongooseDocument) => {
        if (error) {
          return null;
        }

        return user;
      });
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const user = await User.create(input);
      return user;
    }
  }
};

export default resolvers;
