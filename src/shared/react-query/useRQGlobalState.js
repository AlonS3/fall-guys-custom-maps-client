import { useQuery } from "react-query"
import queryClient from "./queryClient"

const useRQGlobalState = (key, initialData) => [
    useQuery([key], () => initialData, {enabled: false, initialData}).data,
    (value) => queryClient.setQueryData([key], value)
]
  

export default useRQGlobalState