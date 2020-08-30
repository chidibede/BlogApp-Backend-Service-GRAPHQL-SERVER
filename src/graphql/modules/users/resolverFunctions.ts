import bcrypt from 'bcryptjs'
import User from "../../../models/user.model";
import { RegisterUserInterface } from "../../../interfaces/userInterfaces/userInterface";
import { RegisterValidation } from "../../../utils/validations";

export const users = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (e) {
    console.log(e);
  }
};

export const user = async (_: any, { id }: { id: string }) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

export const registerUser = async (_: any, args: RegisterUserInterface) => {
  // check if data is valid
  const { error } = RegisterValidation(args);

  // check if username exists
  const matchedUsername = User.findOne({username: args.username});

  // check if email exists
  const matchedEmail = User.findOne({email: args.email});

  // hash password

  // TODO: Issue tokens
};
