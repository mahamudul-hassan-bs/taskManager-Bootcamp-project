import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const generateToken = (id, res) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
};

export default generateToken;
