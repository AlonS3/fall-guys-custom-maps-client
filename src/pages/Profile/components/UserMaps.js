import React, { useContext } from "react"
import { useQuery } from "react-query"
import { getUserMaps } from "../../../api/backendApi"
import { AuthContext } from "../../../shared/context/authContext"
import { Text } from "@chakra-ui/react"

const UserMaps = () => {
  const auth = useContext(AuthContext)
  const { data, isLoading, isError } = useQuery(["user-maps"], () => getUserMaps(auth.userData.id), {
    cacheTime: 10000,
    retry: false,
  })
  return <Text>{JSON.stringify(data, null, 4)}</Text>
}

export default UserMaps
