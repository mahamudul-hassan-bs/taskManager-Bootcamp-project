import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { setUser, setToken, backendUrl, token } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(backendUrl + "/api/user/login", {
      email,
      password,
    });

    if (res.data.success) {
      setToken(res.data.token);
      setUser(res.data);
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);
      setEmail("");
      setPassword("");
      navigate("/tasks");
    } else {
      toast.error(res.data.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log(name, email, password, confirmPassword);
    if (password === confirmPassword) {
      const res = await axios.post(backendUrl + "/api/user/register", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        toast.success("Registered Successfully");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsLogin(true);
      } else {
        toast.error(res.data.message);
      }
    } else {
      toast.error("Password didn't match!");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/tasks");
    }
  }, [token]);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" p-6 w-full max-w-sm">
        {/* Login Form */}
        {isLogin && (
          <form
            className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto  gap-4 text-lg"
            onSubmit={handleLogin}
          >
            <div className="inline-flex items-center gap-2 mb-2 mt-6">
              <p className="prata-regular text-3xl">Login</p>
              <hr className="border-none w-8 h-[1.5px] bg-gray-800" />
            </div>
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 px-3 border border-gray-800 "
            />
            <input
              type="password"
              name="password"
              value={password}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-800"
              minLength={8}
            />
            <div className="w-full flex justify-between">
              <a
                href="#"
                to="/forgotPassword"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot Password?
              </a>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-sm text-gray-600 hover:underline"
              >
                Create account
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Login
            </button>
          </form>
        )}

        {/* Signup Form */}
        {!isLogin && (
          <form
            className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto  gap-4 text-lg"
            onSubmit={handleRegister}
          >
            <div className="inline-flex items-center gap-2 mb-2 mt-6">
              <p className="prata-regular text-3xl">Sign Up</p>
              <hr className="border-none w-8 h-[1.5px] bg-gray-800" />
            </div>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-800"
              value={name}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-800"
              value={email}
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-800"
              value={password}
            />
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-800"
              value={confirmPassword}
            />
            <div className="w-full flex justify-between">
              <a
                href="#"
                to="/forgotPassword"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot Password?
              </a>
              {/* <span className="text-sm text-gray-600"></span> */}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-sm text-gray-600 hover:underline"
              >
                Login here!
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default Login;
