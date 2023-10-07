import React from "react"

import { Stack, Avatar, Heading, Button, Spacer, Skeleton, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

import useGetUserProfileInfo from "../../../shared/hooks/useGetUserProfileInfo"

const PrivateInfoBody = () => {
  const { data, isLoading, isError } = useGetUserProfileInfo()

  if (isError)
    return (
      <Text textAlign={"center"} color={"red.400"}>
        Error fetching data
      </Text>
    )

  const updateInfoClickHandler = () => {
    window.open(process.env.REACT_APP_BACKEND_URL + "/api/user/auth/google/update", "_self")
  }

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
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem onClick={updateInfoClickHandler}>Update Info</MenuItem>
          <MenuItem>Delete Account</MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  )
}

export default PrivateInfoBody
