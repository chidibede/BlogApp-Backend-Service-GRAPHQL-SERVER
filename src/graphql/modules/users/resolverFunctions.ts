import bcrypt from "bcryptjs";
import User from "../../../models/user.model";
import {
  RegisterUserInterface,
  LoginUserInterface,
} from "../../../interfaces/userInterfaces/userInterface";
import {
  RegisterValidation,
  LoginValidation,
} from "../../../utils/validations";
import { issueTokens } from "../../../utils/tokens";

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
  const username = args.username;
  const matchedUsername = await User.findOne({ username });

  // check if email exists
  const matchedEmail = await User.findOne({ email: args.email });

  // hash password
  const password: string = await bcrypt.hash(args.password, 12);

  if (matchedUsername) {
    return { message: "username is taken" };
  } else if (matchedEmail) {
    return { message: "email is taken" };
  } else if (error) {
    return { message: error.details[0].message };
  } else {
    const token = issueTokens({
      id: "id",
      username: args.username,
      email: args.email,
    });
    const result = await User.create({
      username: args.username,
      email: args.email,
      password: password,
    });

    const newUser = {
      id: result._id,
      username: args.username,
      email: args.email,
      password: password,
      token,
    };

    const message = `User ${args.username} created successfully`;
    return { message, newUser };
  }
};

// Login user resolver
export const loginUser = async (_: any, args: LoginUserInterface) => {
  const user: any = await User.findOne({ email: args.email });

  const { error } = LoginValidation(args);
  if (!user) {
    return { message: "email does not exists" };
  } else if (error) {
    const message = "Email or password is invalid";
    return { message };
  } else {
    const validUser = await bcrypt.compare(args.password, user.password);

    if (validUser) {
      // create and assign token
      const token = await issueTokens({
        id: user.id,
        username: user.username,
        email: user.email,
      });

      const loggedInUser = {
        email: user.email,
        password: user.password,
        username: user.username,
        token,
      };

      return { message: "logged in", loggedInUser: loggedInUser };
    } else {
      return { message: "Invalid email or password" };
    }
  }
};
