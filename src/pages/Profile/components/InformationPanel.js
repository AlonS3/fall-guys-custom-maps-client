import { Box, VStack, Heading, useColorModeValue } from "@chakra-ui/react"
import React from "react"

const InformationPanel = ({ children, title, grow, shrink }) => {
  const borderColorValue = useColorModeValue("rgb(226, 232, 240)", "whiteAlpha.300")
  return (
    <VStack gap={0} flexGrow={grow} flexShrink={shrink} flexBasis={0}>
      <Box borderTopRadius={"2xl"} borderWidth={"1px"} borderBottomWidth={0} borderColor={borderColorValue} padding={2} w={"full"}>
        <Heading size={"md"} textAlign={"center"} fontWeight={"normal"}>
          {title}
        </Heading>
      </Box>
      <Box padding={5} borderBottomRadius={"2xl"} borderWidth={"1px"} borderColor={borderColorValue} w={"full"} flexGrow={1}>
        {children}
      </Box>
    </VStack>
  )
}

export default InformationPanel
