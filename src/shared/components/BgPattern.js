import React from "react"

import { Box, useColorModeValue } from "@chakra-ui/react"

import tilePattern from "../../assets/images/backgrounds/tile-pattern-optimized.svg"

const BgPattern = () => {
  return (
    <>
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
        zIndex={-1}
      />
      {/* bg color only div  */}
      <Box backgroundColor={useColorModeValue("#e8e8e8", "")} pos={"absolute"} top={0} left={0} right={0} bottom={1} zIndex={-2} />
    </>
  )
}

export default BgPattern
