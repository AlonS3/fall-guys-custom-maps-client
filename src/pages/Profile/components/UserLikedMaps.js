import React, { useState } from "react"
import { Box, useColorModeValue, Container, SimpleGrid, Skeleton } from "@chakra-ui/react"

import MapItem from "../../../shared/components/MapItem/MapItem"

import PagesNavigation from "../../../shared/components/PagesNavigation"

import useGetUserProfileInfo from "../../../shared/hooks/useGetUserProfileInfo"

const UserLikedMaps = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const mapsPerPage = 5 // Number of maps to display at once
  const { data, isLoading, isError, isSuccess } = useGetUserProfileInfo()

  const currentElement = (pageNumber - 1) * mapsPerPage

  const displayedMaps = data ? data.likedMaps.slice(currentElement, currentElement + mapsPerPage).map((likeObject) => likeObject.map) : []

  const numberOfPages = data && data.likedMaps.length ? Math.ceil(data.likedMaps.length / mapsPerPage) : 1

  return (
    <Box
      overflow="hidden"
      borderLeft="1px"
      borderRight="1px"
      borderBottom="1px"
      borderBottomRadius={4}
      borderColor={useColorModeValue("rgb(226, 232, 240)", "whiteAlpha.300")}
      w="fit-content"
      margin="auto"
      bg="transparent"
      p={4}
      pb={6}
    >
      <Container centerContent p={4}>
        {data && <span>{data.likedMaps.length} maps found</span>}
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error Loading</span>}
      </Container>

      <SimpleGrid
        p={2}
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
        gap={5}
        spacing={0}
        templateColumns={{
          base: "repeat(1, 220px);",
          sm: "repeat(2, 220px);",
          md: "repeat(3, 220px);",
          lg: "repeat(4, 220px);",
          xl: "repeat(5, 220px);",
          "2xl": "repeat(5, 220px);",
        }}
        w="fit-content"
        mx="auto"
      >
        {isLoading && Array.from({ length: 2 }, (_, index) => <Skeleton key={index} height="302px" borderRadius={"md"} />)}
        {!isLoading && isSuccess && data && displayedMaps.map((map, index) => <MapItem key={index} map={map} />)}
      </SimpleGrid>
      <PagesNavigation setPageNumber={setPageNumber} pageNumber={pageNumber} totalPages={numberOfPages} hasNextPage={pageNumber < numberOfPages} />
    </Box>
  )
}

export default UserLikedMaps
