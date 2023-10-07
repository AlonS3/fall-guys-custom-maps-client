import React, { useCallback } from "react"
import { useState } from "react"

import MapList from "./components/MapList"
import TopSection from "./components/TopSection"

import { useSearchParamsState } from "../../shared/hooks/useSearchParamsState"

import { Box, useColorModeValue, Image } from "@chakra-ui/react"
import tilePattern from "../../assets/images/backgrounds/tile-pattern-optimized.svg"

function HomePage() {
  const defaultCategory = "Casual"
  const defaultSort = "Popularity"
  const [mapCategory, setMapCategory] = useSearchParamsState("category", defaultCategory)
  const [query, setQuery] = useSearchParamsState("query", "")
  const [pageNumber, setPageNumber] = useSearchParamsState("page", 1)
  const [sortByOption, setSortByOption] = useSearchParamsState("sort", defaultSort)

  const [searchTrigger, setSearchTrigger] = useState(false)

  const handleChooseCategory = useCallback(
    (categoryName) => {
      // if you didnt click on the same category the category
      setMapCategory(categoryName, true)
    },
    [setMapCategory]
  )

  const handleSetQuery = useCallback(
    (queryText) => {
      setQuery(queryText, true)
    },
    [setQuery]
  )

  const handleChooseSorting = useCallback(
    (sortName) => {
      // if you didnt click on the same category the category
      setSortByOption(sortName, true)
    },
    [setSortByOption]
  )

  const handleSearch = useCallback(() => {
    setPageNumber(1)
    setSearchTrigger((prevTrigger) => !prevTrigger) // Toggle the searchTrigger value
  }, [setPageNumber])

  return (
    <>
      <TopSection />

      <MapList
        mapCategory={mapCategory}
        pageNumber={pageNumber}
        searchTrigger={searchTrigger}
        query={query}
        setQuery={handleSetQuery}
        handleChooseCategory={handleChooseCategory}
        sortByOption={sortByOption}
        setSortByOption={handleChooseSorting}
        setPageNumber={setPageNumber}
      />
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

export default HomePage
