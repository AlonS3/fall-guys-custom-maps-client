import React from "react"
import { Stack, Heading, Button, VStack, Spacer, Skeleton, SkeletonText, Text } from "@chakra-ui/react"

import useGetUserProfileInfo from "../../../shared/hooks/useGetUserProfileInfo"

const PublicInfoBody = () => {
  const { data, isLoading, isError } = useGetUserProfileInfo()

  if (isError)
    return (
      <Text textAlign={"center"} color={"red.400"}>
        Error fetching data
      </Text>
    )

  return (
    <Stack direction={["column", "column", "row"]} alignItems={"center"} height={"full"}>
      <VStack>
        <Heading size={"sm"} fontWeight={"normal"}>
          Nickname:
        </Heading>
        <Skeleton isLoaded={!isLoading}>
          {isLoading ? (
            <Heading size={"md"} textAlign={"center"}>
              User Name Placeholder
            </Heading>
          ) : (
            <Heading size={"md"} textAlign={"center"}>
              {data.nickname}
            </Heading>
          )}
        </Skeleton>
      </VStack>

      <Spacer />
      <VStack>
        <Heading size={"sm"} fontWeight={"normal"}>
          Status:
        </Heading>
        <SkeletonText isLoaded={!isLoading}>
          {isLoading ? (
            <Heading size={"sm"} maxWidth={450} fontWeight={"normal"} whiteSpace={"pre-line"} wordBreak={"break-word"} textAlign={"center"}>
              test test test test test test test test test test test, test test test - test@test.test test test test
            </Heading>
          ) : (
            <Heading size={"sm"} maxWidth={450} fontWeight={"normal"} whiteSpace={"pre-line"} wordBreak={"break-word"} textAlign={"center"}>
              {data.status || "Wobbly Wanderer"}
            </Heading>
          )}
        </SkeletonText>
      </VStack>
      <Spacer />
      <Button>Edit</Button>
    </Stack>
  )
}

export default PublicInfoBody
