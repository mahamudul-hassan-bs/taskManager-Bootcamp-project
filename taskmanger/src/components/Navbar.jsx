import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const { setUser, setToken } = useContext(UserContext);

  const handleLogout = () => {
    setUser("");
    setToken("");
    localStorage.removeItem("token");
  };

  // console.log(token);
  return (
    <div className="flex  items-center justify-between  py-5 font-medium">
      <h6>Task Tracker</h6>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <Link to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-3/4 border-none h-[1.7px] bg-gray-700 hidden" />
        </Link>
        <Link to="/tasks" className="flex flex-col items-center gap-1">
          <p>TASKS</p>
          <hr className="w-3/4 border-none h-[1.7px] bg-gray-700 hidden" />
        </Link>

        {!token ? (
          <Link to="/login" className="flex flex-col items-center gap-1">
            <p>LOGIN</p>
            <hr className="w-3/4 border-none h-[1.7px] bg-gray-700 hidden" />
          </Link>
        ) : (
          <button onClick={handleLogout}>LOGOUT</button>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
