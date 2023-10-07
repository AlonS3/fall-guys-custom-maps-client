import { useState, useCallback, useReducer } from "react"
import axios from "axios"

import { useQuery } from "react-query"
import { getUserStatus } from "../../api/backendApi"

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const useAuthReactQuery = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, dispatch] = useReducer(userReducer, {
    id: "",
    nickname: "",
    photo: "",
  })

  const { isLoading, isError: networkError } = useQuery(["user-status"], getUserStatus, {
    cacheTime: 1000,
    retry: false,
    onSuccess: (data) => {
      if (data.loggedIn) {
        login(data.user._id, data.user.nickname, data.user.photo)
      }
    },
  })

  const setUserData = useCallback((id, nickname, photo) => {
    dispatch({
      type: "SET_USER",
      payload: { id, nickname, photo },
    })
  }, [])

  const login = useCallback(
    (id, nickname, photo) => {
      setIsLoggedIn(true)
      setUserData(id, nickname, photo)
    },
    [setUserData]
  )

  const logout = useCallback(async () => {
    try {
      await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/logout", {
        withCredentials: true,
      })
    } catch (err) {
    } finally {
      setIsLoggedIn(false)
      setUserData("", "", "")
    }
  }, [setUserData])

  const useLogout = useCallback(() => {
    try {
      setIsLoggedIn(false)
      setUserData("", "", "")
    } catch (err) {}
  }, [setUserData])

  return {
    isLoggedIn,
    login,
    logout,
    useLogout,
    userData,
    isLoading,
    networkError,
  }
}

export default useAuthReactQuery
