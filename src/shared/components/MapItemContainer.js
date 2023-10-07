import React from "react"

import { Box, Button, Stack, useColorModeValue, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"

import { BiSolidEdit } from "react-icons/bi"

const MapItemContainer = ({ children, mapId }) => {
  return (
    <Box bg={useColorModeValue("blue.50", "gray.700")} borderRadius={"lg"}>
      <Stack spacing={0}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BiSolidEdit />} size={"xs"} alignSelf={"center"} m={1}>
            Edit
          </MenuButton>
          <MenuList zIndex={3}>
            <MenuItem>Update Info</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
        <Box>{children}</Box>
      </Stack>
    </Box>
  )
}

export default MapItemContainer
