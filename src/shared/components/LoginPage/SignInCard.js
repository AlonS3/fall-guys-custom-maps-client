import React from "react";

import { FcGoogle } from "react-icons/fc";
import {
  Flex,
  Box,
  Stack,
  Button,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const SignInCard = ({ url }) => {
  const loginClickHandler = () => {
    window.open(process.env.REACT_APP_BACKEND_URL + url, "_self");
  };

  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")} minH={"inherit"}>
      <Flex
        minH={"calc(80vh - 3.5rem)"}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Text>We currently support only sign in with google</Text>
            <Center p={8}>
              <Button
                onClick={loginClickHandler}
                w={"full"}
                maxW={"md"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Center>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SignInCard;
