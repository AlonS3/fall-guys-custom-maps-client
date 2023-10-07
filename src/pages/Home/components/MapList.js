import React, { useState, useEffect } from "react"
import { useQuery } from "react-query"

import MapItem from "../../../shared/components/MapItem/MapItem"
import SortRadioButton from "../../../shared/components/SortRadioButton"
import SearchSection from "../components/SearchSection"
import CategoriesBar from "./CategoriesBar"

import { getMaps } from "../../../api/backendApi"

import { SimpleGrid, Box, Container, Skeleton, Flex } from "@chakra-ui/react"

import PagesNavigation from "../../../shared/components/PagesNavigation"

const MapList = ({ query, setQuery, handleChooseCategory, sortByOption, setSortByOption, mapCategory, pageNumber, searchTrigger, setPageNumber }) => {
  const updatedParams = { mapCategory, sortByOption, pageNumber, query }
  // debounced params state
  const [currentParams, setCurrentParams] = useState(updatedParams)

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["maps", currentParams],
    ({ signal }) => getMaps(signal, mapCategory, sortByOption, pageNumber, query),
    {
      staleTime: 1000 * 60 * 2,
    }
  )

  // debouncing the params
  useEffect(() => {
    if (JSON.stringify(updatedParams) !== JSON.stringify(currentParams)) {
      const timerId = setTimeout(() => setCurrentParams(updatedParams), 1000)
      return () => clearTimeout(timerId)
    }
  }, [updatedParams])

  return (
    <Box overflow="hidden" margin="auto" p={4} pb={6}>
      <Box width={"full"} position={"relative"} height={14}>
        <Box position={"absolute"} left={"50%"} transform={"translateX(-50%)"}>
          <CategoriesBar handleChooseCategory={handleChooseCategory} mapCategory={mapCategory}></CategoriesBar>
        </Box>
      </Box>

      <Container maxW={"container.xl"} my={3}>
        <Flex width={"full"} justifyContent={{ base: "center", md: "space-between" }} flexWrap={"wrap"} rowGap={6}>
          <SearchSection query={query} setQuery={setQuery} />
          <SortRadioButton sortByOption={sortByOption} setSortByOption={setSortByOption} />
        </Flex>
      </Container>

      <Container centerContent p={4}>
        {query && <span>showing search for "{query}"</span>}
        {data && <span>{data.totalMaps} maps found</span>}
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
          "2xl": "repeat(6, 220px);",
        }}
        w="fit-content"
        mx="auto"
      >
        {isLoading && Array.from({ length: 3 }, (_, index) => <Skeleton key={index} height="302px" borderRadius={"md"} />)}
        {!isLoading && isSuccess && data && data.maps.map((map) => <MapItem key={map._id} map={map} />)}
      </SimpleGrid>
      <PagesNavigation
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        totalPages={data?.totalPages ?? 1}
        hasNextPage={data?.hasNextPage ?? false}
      />
    </Box>
  )
}

export default MapList
