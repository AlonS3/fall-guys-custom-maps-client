import React, { memo } from 'react'

import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'

function SearchSection({query, setQuery }) {
    const handleInputChange = (e) => {
      setQuery(e.target.value)
    };

  return (
    <>
    <InputGroup width={{base: "200px", sm: "350px", md: "500px", lg: "700px"}} mx="auto">
      <InputRightElement pointerEvents='none' height="full">
        <SearchIcon color='gray.300' boxSize="60%" />
      </InputRightElement>
      <Input placeholder='Search Map' size='lg' value={query} onChange={handleInputChange}/>
    </InputGroup>
    </>
  )
}

const MemoedSearchSection = memo(SearchSection)
export default MemoedSearchSection