import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';


const getQueryFilters = () => {
    const filters = new Map();
    const searchParams = new URLSearchParams(window.location.search);
    for (const [k, value] of searchParams.entries()) {
        const key = k;
        if (!filters.has(key)) filters.set(key, new Set());
        filters.get(key)?.add(value);
    }
    return filters;
}


const useSearchParamsStateAdvanced = () => {
    const defaultCategory = 'Casual';
    const defaultSort = 'Popularity';
    const filters = useRef(getQueryFilters())
    const [mapCategory, setMapCategory] = useState( filters.current["category"] ?? defaultCategory)
    const [query, setQuery] = useState( filters.current["query"] ?? "")
    const [pageNumber, setPageNumber] = useState( filters.current["page"] ?? 1)
    const [sortByOption, setSortByOption] = useState(filters.current["sort"] ,defaultSort)

    const [searchParams] = useSearchParams()
    const location = useLocation()


    useEffect(() => {
        console.log(Object.fromEntries([...searchParams]))
    },[location])

  return null
}

export default useSearchParamsStateAdvanced