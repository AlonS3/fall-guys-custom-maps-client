import React, { memo } from "react"

import { Input, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

function SearchSection({ query, setQuery }) {
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const colorValue = useColorModeValue("black", "")

  return (
    <>
      <InputGroup width={{ base: "200px", sm: "350px", md: "350px", lg: "350px" }}>
        <InputRightElement pointerEvents="none" height="full">
          <SearchIcon color={colorValue} boxSize="50%" />
        </InputRightElement>
        <Input
          placeholder="Search"
          size="md"
          value={query}
          onChange={handleInputChange}
          borderColor={colorValue}
          _hover={{}}
          borderRadius={"full"}
          borderWidth={"0.22rem"}
        />
      </InputGroup>
    </>
  )
}

const MemoedSearchSection = memo(SearchSection)
export default MemoedSearchSection
