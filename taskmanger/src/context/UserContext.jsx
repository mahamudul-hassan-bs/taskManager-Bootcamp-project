import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
// import toast from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const getUser = async (token) => {
    try {
      const userInfo = await axios.get(backendUrl + "/api/user/userInfo", {
        headers: {
          token,
        },
      });

      if (userInfo.data.success) {
        setUser(userInfo.data.userInfo);
      } else {
        console.log(userInfo.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getUser(token);
    }
  }, [token]);

  const value = {
    user,
    setUser,
    backendUrl,
    token,
    setToken,
    loading,
    setLoading,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
