import { AuthenticationError } from "../utils/auth";
import User from "../models/User";
import type { IResolvers } from "@graphql-tools/utils";
import jwt from "jsonwebtoken";

const resolvers: IResolvers = {
  Query: {
    me: async (_parent, _args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You must be logged in");
      }

      const userData = await User.findById(context.user._id).select(
        "-__v -password"
      );
      return userData;
    },
  },

  Mutation: {
    login: async (_parent, { email, password }, _context) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }

      const isPwCorrect = await user.isCorrectPassword(password);
      if (!isPwCorrect) {
        throw new AuthenticationError("Invalid credentials");
      }

      const token = jwt.sign(
        { data: { _id: user._id, email: user.email, username: user.username } },
        process.env.JWT_SECRET_KEY || "",
        {
          expiresIn: "1h",
        }
      );

      return { token, user };
    },

    addUser: async (_parent: any, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      console.log("✅ New user created:", user);
      const token = jwt.sign(
        { data: { _id: user._id, email: user.email, username: user.username } },
        process.env.JWT_SECRET_KEY || "",
        {
          expiresIn: "1h",
        }
      );

      return { token, user };
    },

    saveBook: async (_parent: any, { input }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You must be logged in");
      }

      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $addToSet: { savedBooks: input } },
        { new: true, runValidators: true }
      );

      return updatedUser;
    },

    removeBook: async (_parent, { bookId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You must be logged in");
      }

      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );

      return updatedUser;
    },
  },
};

export default resolvers;
