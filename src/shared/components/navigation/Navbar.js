import React, {useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
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
} from '@chakra-ui/react';

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useColorMode
  } from '@chakra-ui/react'

  
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavLinks from './NavLinks';
import MainHeader from './MainHeader';

import { AuthContext } from '../../context/authContext'



const Navbar = ({isLoading}) => {
  const auth = useContext(AuthContext)
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef()

  return (
    <>
      <MainHeader as="header" bg={useColorModeValue("gray.100", "gray.900")} px={4} position={"fixed"} top={0} left={0} w={"100%"} zIndex={5} background={useColorModeValue("linear-gradient(180deg, rgba(237,253,253,1) 0%, rgba(255,255,255,1) 100%)", "linear-gradient(180deg, rgba(47,50,50,1) 0%, #1A202C 75%)")}>
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            ref={btnRef}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Heading size='lg' fontSize="25px" ml={{sm:"40px" , xl:"400px"}} textTransform="none" whiteSpace="nowrap" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' py={4} >
              <Link to="/">Fall Guys Maps</Link>
            </Heading>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {!isLoading && <NavLinks/>}
            </HStack>
          </HStack>
          <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          {auth.isLoggedIn &&
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={auth.userData.photo}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Add Map</MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          }
          
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay display={{ md: "none" }}/>
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
  );
}

export default Navbar