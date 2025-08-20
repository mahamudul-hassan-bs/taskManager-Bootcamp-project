import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
  };
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
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 px-3 border border-gray-800 "
            />
            <input
              type="password"
              name="password"
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
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-800"
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-800"
            />
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-800"
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
