import User from "../models/userModel.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email === "" || password === "") {
      return res.status(400).json({
        success: "False",
        message: "Provided Wrong information",
      });
    }
  } catch (error) {}
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name === "" || email === "" || password === "") {
      return res.status(400).json({
        success: "False",
        message: "Provided Wrong information",
      });
    }
    const findUser = await User.findOne({ email });
    console.log(findUser);

    if (findUser) {
      return res.status(400).json({
        success: "False",
        message: "User already exists",
      });
    }

    const newUser = new User({
      name,
      email,
      password,
    });
    if (newUser) {
      await newUser.save();
      res.status(201).json({
        success: "true",
        message: "Account created",
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    } else {
      res.status(400).json({
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

export { login, register };
