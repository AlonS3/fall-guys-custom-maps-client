import React, { useCallback } from 'react'
import { useState } from 'react';

import MapList from './components/MapList';
import TopSection from './components/TopSection';


import { useSearchParamsState } from '../../shared/hooks/useSearchParamsState';



function HomePage() {
    const defaultCategory = 'Casual';
    const defaultSort = 'Popularity';
    const [mapCategory, setMapCategory] = useSearchParamsState( "category", defaultCategory)
    const [query, setQuery] = useSearchParamsState( 'query', '')
    const [pageNumber, setPageNumber] = useSearchParamsState( 'page',1)
    const [sortByOption, setSortByOption] = useSearchParamsState('sort' ,defaultSort)

    const [searchTrigger, setSearchTrigger] = useState(false)



    const handleChooseCategory = useCallback((categoryName) => {
      // if you didnt click on the same category the category
        setMapCategory(categoryName, true)
    },[setMapCategory])

    const handleSetQuery = useCallback((queryText) => {
      setQuery(queryText, true)
    },[setQuery])

    const handleChooseSorting = useCallback((sortName) => {
      // if you didnt click on the same category the category
        setSortByOption(sortName, true)
    },[setSortByOption])
    
    const handleSearch = useCallback(() => {
      setPageNumber(1)
      setSearchTrigger(prevTrigger => !prevTrigger); // Toggle the searchTrigger value
    },[setPageNumber])


    
    return (
      <>
      <TopSection query={query} setQuery={handleSetQuery} handleChooseCategory={handleChooseCategory} mapCategory={mapCategory}/>
      <MapList mapCategory={mapCategory} pageNumber={pageNumber} searchTrigger={searchTrigger} query={query} sortByOption={sortByOption} setSortByOption={handleChooseSorting} setPageNumber={setPageNumber}/>
      </>
    )
}

export default HomePage;