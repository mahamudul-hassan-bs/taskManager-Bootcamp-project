import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import { json } from "express";
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email === "" || password === "") {
      return res.status(200).json({
        success: false,
        message: "Provided Wrong information",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);

      if (checkPassword) {
        res.status(200).json({
          success: true,
          message: "User logged in successfully",
          id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Password didn't match",
        });
      }
    } else {
      return res.status(200).json({
        success: false,
        message: "User doesn't exist. Register first!",
      });
    }
  } catch (error) {
    console.log("Error in login controller ", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name === "" || email === "" || password === "") {
      return res.status(200).json({
        success: false,
        message: "Provided Wrong information",
      });
    }
    const findUser = await User.findOne({ email });

    if (findUser) {
      return res.status(200).json({
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    if (newUser) {
      await newUser.save();
      res.status(201).json({
        success: true,
        message: "Account created",
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    } else {
      res.status(200).json({
        error: "Invalid user data",
      });
    }
  } catch (error) {
    console.log("Error in register controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const userInfo = async (req, res) => {
  const id = req.userId;
  try {
    if (!id) {
      return res.status(200).json({
        success: false,
        message: "Unauthorized user",
      });
    }

    const userInfo = await User.findById(id).select("-password");

    if (userInfo) {
      return res.status(200).json({
        success: true,
        userInfo,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Unauthorized user",
      });
    }
  } catch (error) {
    console.log("Error in userInfo controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
export { login, register, userInfo };
