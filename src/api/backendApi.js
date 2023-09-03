import axios from "axios"
import queryClient from "../shared/react-query/queryClient"

export const backendApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
})

export const setupResponseInterceptor = (navigate, useLogout) => {
  return backendApi.interceptors.response.use(
    (response) => {
      // If the request succeeds, we don't have to do anything and just return the response
      return response
    },
    (error) => {
      const { response } = error
      if (error.code === "ERR_NETWORK") {
        // connection problem
        if (queryClient.getQueryData(["networkErrorAlert"]) !== true) {
          queryClient.setQueryData(["networkErrorAlert"], true)
        }
      } else if (error.code === "ERR_CANCELED") {
        // connection canceled
      }

      if (response) {
        const statusCode = response?.status
        // const responseData = response?.data
        // If the request fails, we check if the status is 401, then redirect to the login page
        if (statusCode === 404) {
          // The requested resource does not exist or has been deleted
        } else if (statusCode === 401) {
          // Please login to access this resource
          useLogout()
          navigate("/login")
        }
      }
      return Promise.reject(error)
    }
  )
}

const sortObjectMap = {
  Trending: "",
  Popularity: "popularity",
  Date: "dateAdded",
}

export const getMaps = async (signal, category, sort, page, query) => {
  const response = await backendApi.get("/api/public/maps", {
    params: {
      category,
      page,
      query,
      sort: sortObjectMap[sort],
    },
    withCredentials: true,
    signal,
  })
  return response.data
}

export const getUserStatus = async () => {
  const response = await backendApi.get("/api/public/auth/status", {
    headers: {
      "Cache-Control": "no-cache",
    },
    withCredentials: true,
  })
  return response.data
}

export const getUserProfile = async () => {
  const response = await backendApi.get("/api/profile", {
    headers: {
      "Cache-Control": "no-cache",
    },
    withCredentials: true,
  })
  return response.data
}

export const getMapData = async (mapId) => {
  const response = await backendApi.get(`/api/public/map/${mapId}`, {
    withCredentials: true,
  })
  return response.data
}

export const likeMap = async ({ functionName, mapId }) => {
  const response = await backendApi.patch(
    `/api/map/${functionName}/${mapId}`,
    {},
    {
      withCredentials: true,
    }
  )
  return response.data
}

export const addMap = async (formData) => {
  const formDataObject = new FormData()

  for (let key in formData) {
    if (key === "files") {
      formData[key].forEach((element) => formDataObject.append(key, element.file))
    } else {
      formDataObject.append(key, formData[key])
    }
  }
  const response = await backendApi.post("/api/map/", formDataObject, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  })
  return response.data
}

export const getUserMaps = async (userId) => {
  const response = await backendApi.get(`/api/public/user/${userId}`)
  return response.data
}
