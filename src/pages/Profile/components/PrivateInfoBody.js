import React from "react"

import { Stack, Avatar, Heading, Button, Spacer, Skeleton, Text } from "@chakra-ui/react"

import useGetUserProfileInfo from "../../../shared/hooks/useGetUserProfileInfo"

const PrivateInfoBody = () => {
  const { data, isLoading, isError } = useGetUserProfileInfo()

  if (isError)
    return (
      <Text textAlign={"center"} color={"red.400"}>
        Error fetching data
      </Text>
    )

  return (
    <Stack direction={["column", "column", "row"]} alignItems={"center"}>
      <Stack direction={"column"} alignItems={"center"} flexGrow={1}>
        <Stack direction={["column", "column", "row"]} alignItems={"center"}>
          <Avatar name={data?.displayName} src={data?.photo} size={"sm"} />
          <Skeleton isLoaded={!isLoading}>
            {isLoading ? <Heading size={"md"}>Placeholder Texttt</Heading> : <Heading size={"md"}>{data.displayName}</Heading>}
          </Skeleton>
        </Stack>

        <Skeleton isLoaded={!isLoading}>
          {isLoading ? <Heading size={"md"}>Placeholder@Text.Text</Heading> : <Heading size={"sm"}>{data.email}</Heading>}
        </Skeleton>
      </Stack>
      <Spacer />
      <Stack direction={"column"} alignItems={"center"}>
        <Button>Update Info</Button>
        <Button>Delete Account</Button>
      </Stack>
    </Stack>
  )
}

export default PrivateInfoBody
