import React, { useState } from "react"

import {
  Card,
  CardBody,
  Flex,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react"

import CardOverlay from "./components/CardOverlay"
import CardBodyInformation from "./components/CardBodyInformation"
import LikeButton from "./components/LikeButton"
import CardCarousel from "./components/CardCarousel"

import queryClient from "../../react-query/queryClient"

const cardHeight = "302px"

const MapItem = ({ map }) => {
  const mapLinkPath = `/map/${map._id}`
  const userLinkPath = `/user/${map.creator._id}/maps`
  const [copied, setCopied] = useState(false)
  const [likesCounter, setLikesCounter] = useState(parseInt(map.likesCount))

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(map.code)
      setCopied(true)
    } catch (err) {
      setCopied(false)
    }
  }

  const handleOpenPopover = () => {
    setCopied(false)
  }

  const handleMapClick = () => {
    queryClient.setQueryData(["map", map._id], map)
  }

  return (
    <Box justifyContent="center" display="flex" alignItems="center" w="220px" maxW="220px" maxH={cardHeight} p={0}>
      <Card maxH={cardHeight} h={cardHeight} w="220px" maxW="220px">
        <CardBody p={0} h="260px">
          <CardOverlay category={map.category} counter={likesCounter} mapLinkPath={mapLinkPath} handleMapClick={handleMapClick} />
          <Flex flexDirection="column" h="full" maxH="100%" overflow="hidden">
            <CardCarousel images={map.images} mapLinkPath={mapLinkPath} handleMapClick={handleMapClick} />
            <CardBodyInformation map={map} mapLinkPath={mapLinkPath} userLinkPath={userLinkPath} handleMapClick={handleMapClick} />
          </Flex>
        </CardBody>
        <Divider />
        <CardFooter p={2}>
          <ButtonGroup spacing="2" justifyContent="space-between" w="full">
            <Popover onOpen={handleOpenPopover} isLazy>
              <PopoverTrigger>
                <Button variant="solid" colorScheme="green" size="xs">
                  Map Code
                </Button>
              </PopoverTrigger>
              <PopoverContent w="fit-content">
                <PopoverHeader fontWeight="semibold" fontSize="sm" mx="auto">
                  Map Code
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>{map.code}</PopoverBody>
                <PopoverFooter display="flex" justifyContent="flex-end">
                  <Button colorScheme="blue" size="xs" mx="auto" onClick={handleCopyCode}>
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
            <LikeButton map={map} setLikesCounter={setLikesCounter} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  )
}

export default MapItem
