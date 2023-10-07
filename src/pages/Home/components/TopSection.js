import React, { memo } from "react"

import logoSVG from "../../../assets/images/logos/main-logo-optimized.svg"
import wavyTransition from "../../../assets/images/backgrounds/wavy-background-optimized.svg"
import strokeTransition from "../../../assets/images/backgrounds/stroke-line-optimized.svg"
import zigzagPattern from "../../../assets/images/backgrounds/zigzag-pattern-optimized2.svg"
import fallGuysHeros from "../../../assets/images/backgrounds/fallguys-models-optimized.svg"
import MainLogo from "./MainLogo"

import { Heading, Box, useColorModeValue, useBreakpointValue, Image } from "@chakra-ui/react"

const TopSection = () => {
  const title = useBreakpointValue({
    base: "",
    sm: "A Place to Explore Fall Guys Levels",
    lg: "A Place to Explore and share your favorite\nFall Guys Levels with the Community",
  })
  return (
    <Box
      pt={14}
      pos={"relative"}
      height={{ base: "auto", sm: 500 }}
      sx={{
        maskBorder: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/stampTiles.svg)",
        WebkitMaskBoxImage: `url(${wavyTransition})`,
        WebkitMaskBoxImageSlice: "0 0 100 0 fill",
        WebkitMaskBoxImageRepeat: "repeat",
        WebkitMaskBoxImageWidth: "1",
        borderBottom: "100px solid transparent",
      }}
      bgColor={"gray.800"}
    >
      <Box
        pos={"absolute"}
        bgImage={`url(${strokeTransition})`}
        bgPos={"center top"}
        bottom={-101}
        bgRepeat={"repeat-x"}
        w={"100%"}
        h={"57.39px"}
        zIndex={1}
      ></Box>

      <Box
        pos={"absolute"}
        top={0}
        bottom={-100}
        bgGradient={useColorModeValue(
          "linear-gradient(2deg, rgba(72,187,223,1) 5%, rgba(216,58,207,1) 80%)",
          "linear-gradient(2deg, rgba(72,187,223,1) 5%, rgba(216,58,207,0.2) 80%)"
        )}
        w={"full"}
        zIndex={-1}
      ></Box>

      <Image
        src={zigzagPattern}
        alt="SVG Description"
        pos={"absolute"}
        top={0}
        left={"50%"}
        transform={"translate(-50%) rotate(7deg)"}
        bgRepeat={""}
        minW={2400}
        blendMode={"soft-light"}
        pointerEvents={"none"}
        userSelect={"none"}
        draggable="false"
      />
      <Image
        src={fallGuysHeros}
        alt="SVG Description"
        pos={"absolute"}
        transform={{ base: "scale(0.5) translateX(-100%)", md: "scale(1)" }}
        transformOrigin={"center 85%"}
        bottom={-120}
        left={"50%"}
        bgRepeat={""}
        width={700}
        minW={700}
        pointerEvents={"none"}
        userSelect={"none"}
        draggable="false"
      />
      <Box pos={"relative"} zIndex={1}>
        <MainLogo
          alt="SVG Description"
          maxW={450}
          mx={"auto"}
          mt={{ base: 10, sm: 20 }}
          px={1}
          transform={{ base: "", md: "translateX(-35%)", lg: "translateX(-55%)", xl: "translateX(-90%)" }}
          pointerEvents={"none"}
          userSelect={"none"}
        />
      </Box>

      <Heading
        as="h1"
        display={"inline-block"}
        pos={"absolute"}
        top={"310px"}
        left={"50%"}
        fontSize={"2xl"}
        lineHeight="normal"
        my="40px"
        whiteSpace="pre-wrap"
        transform={{ base: "translateX(-50%)", md: "translateX(-85%)", lg: "translateX(-100%)", xl: "translateX(-130%)" }}
        userSelect={"none"}
      >
        {title}
      </Heading>
    </Box>
  )
}

export default memo(TopSection)
