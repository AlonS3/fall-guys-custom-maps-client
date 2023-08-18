import { useQuery } from "react-query"

import { getUserProfile } from "../../api/backendApi"

const useGetUserProfileInfo = () => {
  return useQuery(["user-profile"], getUserProfile, {
    cacheTime: 10000,
    retry: false,
  })
}

export default useGetUserProfileInfo
