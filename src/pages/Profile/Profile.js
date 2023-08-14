import React from 'react'

import { useQuery } from 'react-query';
import { getUserProfile } from '../../api/backendApi';

import { Container, Avatar, Heading, Stack , useColorModeValue, Button, Spacer, VStack, Box } from '@chakra-ui/react';

const Profile = () => {
    const { isLoading, isError: networkError, data } = useQuery(["user-profile"], getUserProfile, {
        cacheTime: 10000,
        retry: false,
      })
    const borderColorValue = useColorModeValue("rgb(226, 232, 240)", "whiteAlpha.300")
  return (
    !isLoading && !networkError &&
    <Container maxWidth={"container.xl"}>
        <Heading size={"lg"} fontWeight={"bold"} mt={10} >Your Profile:</Heading>
        <Stack direction={["column","column","column", "row"]} p={2} mt={10}>
            <VStack gap={0} flexGrow={1}>
                <Box borderTopRadius={"2xl"} borderWidth={"1px"} borderBottomWidth={0} borderColor={borderColorValue} padding={2} w={"full"} >
                    <Heading size={"md"} textAlign={"center"} fontWeight={"normal"} >Public User Info:</Heading>
                </Box>
                <Stack direction={["column","column","row"]} padding={5} alignItems={"center"} borderBottomRadius={"2xl"} borderWidth={"1px"} borderColor={borderColorValue} w={"full"} flexGrow={1}>
                    <VStack>
                        <Heading size={"sm"} fontWeight={"normal"} >Nickname:</Heading>
                        <Heading size={"md"} textAlign={"center"} >{data.nickname}</Heading>
                    </VStack>
                    
                    <Spacer />
                    <VStack>
                        <Heading size={"sm"} fontWeight={"normal"} >Status:</Heading>
                        <Heading size={"sm"} maxWidth={450} fontWeight={"normal"} whiteSpace={"pre-line"} wordBreak={"break-word"} textAlign={"center"} >{data.status || "I have many map search my maps on the main page,\ncontact me at - djhdh@gmail.com\nall right reserved"}</Heading>
                    </VStack>
                    <Spacer />
                    <Button>Edit</Button>
                </Stack>
            </VStack>
            <VStack gap={0} flexGrow={1} flexShrink={0}>
                <Box borderTopRadius={"2xl"} borderWidth={"1px"} borderBottomWidth={0} borderColor={borderColorValue} padding={2} w={"full"}>
                    <Heading size={"md"} textAlign={"center"} fontWeight={"normal"} >Linked Google Account: (Private Info)</Heading>
                </Box>
                <Stack direction={["column","column","row"]} padding={5} alignItems={"center"} borderBottomRadius={"2xl"} borderWidth={"1px"} borderColor={borderColorValue} w={"full"} flexGrow={1}>
                    <Stack direction={"column"} alignItems={"center"} flexGrow={1}>
                        <Stack direction={["column","column","row"]} alignItems={"center"}>
                            <Avatar name={data.displayName} src={data.photo} size={"sm"} />
                            <Heading size={"md"}>{data.displayName}</Heading>
                        </Stack>
                        
                        <Heading size={"sm"}>{data.email}</Heading>
                    </Stack>
                    <Stack direction={"column"} alignItems={"center"} >
                        <Button>Update Info</Button>
                        <Button>Delete Account</Button>
                    </Stack>
                </Stack>
            </VStack>
        </Stack>

        <Heading size={"lg"} fontWeight={"bold"} mt={10} >Your Maps:</Heading>
    </Container>
    
  )
}

export default Profile