import React from "react"

import { FcGoogle } from "react-icons/fc"
import {
  Flex,
  Box,
  Stack,
  Button,
  Center,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertTitle,
  AlertIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Highlight,
  Divider,
  Link,
} from "@chakra-ui/react"

import { NavLink } from "react-router-dom"

import tilePattern from "../../../assets/images/backgrounds/tile-pattern-optimized.svg"

const SignInCard = ({ url }) => {
  const loginClickHandler = () => {
    window.open(process.env.REACT_APP_BACKEND_URL + url, "_self")
  }

  return (
    <Box bg={useColorModeValue("#e8e8e8", "")} minH={"inherit"}>
      {/* pattern only div  */}
      <Box
        pos={"absolute"}
        opacity={useColorModeValue("0.2", "0.02")}
        top={0}
        left={0}
        right={0}
        bottom={1}
        bgImage={`url(${tilePattern})`}
        color={"red"}
        bgPos={"center top"}
      />
      <Flex align={"center"} justify={"center"} pt={{ base: 10, sm: 40 }}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} zIndex={1}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign in to your account
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Stack rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8} pb={16} gap={8}>
            <Heading size={"md"} textAlign={"center"}>
              Methods:
            </Heading>
            <Center>
              <Button onClick={loginClickHandler} w={"full"} maxW={"md"} variant={"outline"} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Center>

            <Alert status="info" borderRadius={"md"}>
              <AlertIcon />
              <AlertTitle fontSize={"sm"}>
                <Text fontWeight={"normal"}>
                  <Highlight query="does not" styles={{ fontWeight: "bold" }}>
                    Signing in does not grant us access to your Google password or account.
                  </Highlight>
                  <Link as={NavLink} to="/about" color={useColorModeValue("blue.600", "blue.300")} fontWeight={"normal"} pl={1}>
                    Privacy Policy
                  </Link>
                </Text>
              </AlertTitle>
            </Alert>
            <Accordion allowToggle>
              <AccordionItem display={"flex"} flexDirection={"column"} alignItems={"center"} border={"none"}>
                <AccordionButton
                  w={"auto"}
                  gap={2}
                  p={1}
                  px={4}
                  borderRadius={"md"}
                  border={"1px solid"}
                  borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
                >
                  <Box as="span" textAlign="center">
                    More Info
                  </Box>
                  <AccordionIcon transform={"translateX(4px)"} />
                </AccordionButton>
                <AccordionPanel p={0} mt={8}>
                  <Alert
                    status="info"
                    flexDirection="column"
                    border={"1px solid"}
                    borderRadius={"md"}
                    borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
                  >
                    <Box p={1} fontSize={"sm"} fontWeight={"normal"}>
                      <Text fontWeight={"medium"}>
                        Upon your first sign-in, we gather limited details from your Google account:
                        <br />
                        <br />
                      </Text>
                      <li>Email address</li>
                      <li>
                        Google account ID
                        <br />
                        (a unique number tied to your account)
                      </li>
                      <li>Name linked to your Google account</li>
                      <li>Public avatar image URL</li>
                    </Box>
                  </Alert>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Divider />
            <Heading size={"md"} textAlign={"center"}>
              Additional Methods:
            </Heading>
            <Box>
              <Text textAlign={"center"} fontSize={"md"}>
                This website is a work in progress 🛠️.
                <br />
                For now, we only support Google for sign-in due to its ease and security.
                <br />
              </Text>
              <Text textAlign={"center"} fontSize={"sm"}>
                With success, we'll consider adding more methods.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  )
}

export default SignInCard
