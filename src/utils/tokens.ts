require("dotenv").config();
import jwt from "jsonwebtoken";

const secret: string | undefined = process.env.SECRET || "";

export const issueTokens = async (userData: {
  id: string;
  username: string;
  email: string;
}) => {
  let token = await jwt.sign(userData, secret, { expiresIn: "2h" });
  return token;
};
