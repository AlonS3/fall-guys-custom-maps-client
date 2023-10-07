import React, { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { getMaps } from "../../../api/backendApi"
import { Box, useColorModeValue, Container, SimpleGrid, Skeleton, Select, Input, Spacer, Flex } from "@chakra-ui/react"

import MapItem from "../../../shared/components/MapItem/MapItem"
import MapItemContainer from "../../../shared/components/MapItemContainer"

import PagesNavigation from "../../../shared/components/PagesNavigation"
import SortRadioButton from "../../../shared/components/SortRadioButton"

const categories = ["All", "Casual", "Art", "Challenge"]

const UserMaps = ({ userId }) => {
  const defaultCategory = "All"
  const defaultSort = "Date"
  const [mapCategory, setMapCategory] = useState(defaultCategory)
  const [sortByOption, setSortByOption] = useState(defaultSort)
  const [query, setQuery] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

  const updatedParams = { mapCategory, sortByOption, pageNumber, query }
  // debounced params state
  const [currentParams, setCurrentParams] = useState(updatedParams)

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["user-maps", userId, currentParams],
    ({ signal }) => getMaps(signal, mapCategory, sortByOption, pageNumber, query, userId),
    {
      cacheTime: 10000,
      retry: false,
    }
  )

  // debouncing the params
  useEffect(() => {
    if (JSON.stringify(updatedParams) !== JSON.stringify(currentParams)) {
      const timerId = setTimeout(() => setCurrentParams(updatedParams), 1000)
      return () => clearTimeout(timerId)
    }
  }, [updatedParams])

  const categoryChange = (e) => {
    setMapCategory(e.target.value)
  }

  const queryChange = (e) => {
    setQuery(e.target.value)
  }

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
      <Flex flexWrap={"wrap"} justifyContent={{ base: "center", sm: "space-between" }} alignItems="center" columnGap={6} rowGap={2}>
        <Select size={"sm"} width={"fit-content"} borderRadius={"md"} value={mapCategory} onChange={categoryChange}>
          {categories.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Box>
          <SortRadioButton sortByOption={sortByOption} setSortByOption={setSortByOption} />
        </Box>
        <Input value={query} onChange={queryChange} placeholder="Search" size="sm" width={36} borderRadius={"md"} />
      </Flex>

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
          "2xl": "repeat(5, 220px);",
        }}
        w="fit-content"
        mx="auto"
      >
        {isLoading && Array.from({ length: 3 }, (_, index) => <Skeleton key={index} height="302px" borderRadius={"md"} />)}
        {!isLoading &&
          isSuccess &&
          data &&
          data.maps.map((map) => (
            <MapItemContainer key={map._id} mapId={map._id}>
              <MapItem key={map._id} map={map} />
            </MapItemContainer>
          ))}
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

export default UserMaps
