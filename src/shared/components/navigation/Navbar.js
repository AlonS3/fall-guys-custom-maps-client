import React, { useRef, useContext } from "react"
import { Link } from "react-router-dom"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react"

import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useColorMode } from "@chakra-ui/react"

import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import NavLinks from "./NavLinks"
import MainHeader from "./MainHeader"

import { AuthContext } from "../../context/authContext"

const Navbar = ({ isLoading }) => {
  const auth = useContext(AuthContext)
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <MainHeader
        as="header"
        // bg={useColorModeValue("#2e2e2e", "gray.900")}
        bg={"transparent"}
        px={4}
        position={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        // left={{ sm: 0, md: "50%" }}
        // transform={{ sm: "", md: "translateX(-50%)" }}
        // width={{ base: "100%", md: "auto" }}
        zIndex={5}
      >
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            ref={btnRef}
          />
          <Box bgColor={"#2e2e2e"} borderRadius={"lg"}>
            <Heading
              size="lg"
              fontSize="25px"
              textTransform="none"
              whiteSpace="nowrap"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              p={2}
            >
              <Link to="/">Fall Guys Levels</Link>
            </Heading>
          </Box>
          {!isLoading && (
            <Box h={"full"} position="absolute" top="0" left="50%" transform="translate(-50%)" display={{ base: "none", md: "inline-flex" }}>
              <HStack as={"nav"} h={"full"} spacing={4} display={"flex"} px={8} borderBottomRadius={"md"}>
                <NavLinks />
              </HStack>
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                zIndex={-1}
                height={0}
                borderTop={"3.5rem solid #2e2e2e"} // Your desired color for the trapezoid
                borderRight={"10px solid transparent"}
                borderLeft={"10px solid transparent"}
                borderBottomRightRadius={"15px 50px"}
                borderBottomLeftRadius={"15px 50px"}
              ></Box>
            </Box>
          )}

          <HStack>
            <Button onClick={toggleColorMode} bgColor={"#2e2e2e"} color={"white"} borderRadius={"full"}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {auth.isLoggedIn && (
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                    <Avatar size={"sm"} src={auth.userData.photo} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Add Map</MenuItem>
                    <MenuDivider />
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            )}
          </HStack>
        </Flex>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay display={{ md: "none" }} />
          <DrawerContent display={{ md: "none" }}>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Box pb={4}>
                <Stack as={"nav"} spacing={4}>
                  {!isLoading && <NavLinks closeDrawer={onClose} />}
                </Stack>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MainHeader>
    </>
  )
}

export default Navbar
