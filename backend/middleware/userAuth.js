import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(200).json({
      success: false,
      message: "Unauthorized! Login again",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken.id;
    console.log(req.userId);
    next();
  } catch (error) {
    console.log("Error in userAuth middleware", error.message);
    res.status(500).json({
      error: "Internal server error",
      success: "false",
      message: error.message,
    });
  }
};

export default userAuth;
