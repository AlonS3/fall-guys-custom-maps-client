import React, { useState, useEffect } from "react"
import { useQuery } from "react-query"

import MapItem from "../../../shared/components/MapItem/MapItem"
import SortRadioButton from "./SortRadioButtonGroup"

import { getMaps } from "../../../api/backendApi"

import { SimpleGrid, Box, Container, useColorModeValue } from "@chakra-ui/react"

import PagesNavigation from "./PagesNavigation"

const MapList = ({ query, sortByOption, setSortByOption, mapCategory, pageNumber, searchTrigger, setPageNumber }) => {
  const params = { mapCategory, sortByOption, pageNumber, query }
  // debounced params state
  const [newParams, setNewParams] = useState(params)

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["maps", newParams],
    ({ signal }) => getMaps(signal, mapCategory, sortByOption, pageNumber, query),
    {
      staleTime: 1000 * 60 * 2,
    }
  )

  // debouncing the params
  useEffect(() => {
    if (JSON.stringify(params) !== JSON.stringify(newParams)) {
      const timerId = setTimeout(() => setNewParams(params), 1000)
      return () => clearTimeout(timerId)
    }
  }, [params])

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
        <SortRadioButton sortByOption={sortByOption} setSortByOption={setSortByOption} />
        {query && <span>showing search for "{query}"</span>}
        <br></br>
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
