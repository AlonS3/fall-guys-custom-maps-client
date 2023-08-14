import { useState, useCallback, useEffect, useReducer } from "react";
import axios from "axios";

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const useAuth = () => {
  const [networkError, setNetworkError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, dispatch] = useReducer(userReducer, {
    id: "",
    nickname: "",
    photo: "",
  });

  const setUserData = useCallback((id, nickname, photo) => {
    dispatch({
      type: "SET_USER",
      payload: { id, nickname, photo },
    });
  }, []);

  const login = useCallback(
    (id, nickname, photo) => {
      setIsLoggedIn(true);
      setUserData(id, nickname, photo);
    },
    [setUserData]
  );

  const logout = useCallback(async () => {
    try {
      await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/logout", {
        withCredentials: true,
      });
      setIsLoggedIn(false);
      setUserData("", "", "");
    } catch (err) {}
  }, [setUserData]);

  const useLogout = useCallback(() => {
    try {
      setIsLoggedIn(false);
      setUserData("", "", "");
    } catch (err) {}
  }, [setUserData]);

  const autoLogin = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/public/auth/status",
        {
          headers: {
            "Cache-Control": "no-cache"
          },
          withCredentials: true,
        }
      );
      if (response && response.data) {
        if (response.data.loggedIn) {
          login(
            response.data.user._id,
            response.data.user.nickname,
            response.data.user.photo
          );
        }
      }
      setIsLoading(false);
    } catch (err) {
      setNetworkError(true);
      setIsLoading(false);
    }
  }, [login]);

  useEffect(() => {
    try {
      autoLogin();
    } catch (err) {
      setNetworkError(true);
      setIsLoading(false);
    }
  }, [autoLogin]);

  return {
    isLoggedIn,
    login,
    logout,
    useLogout,
    userData,
    isLoading,
    networkError,
  };
};

export default useAuth;
