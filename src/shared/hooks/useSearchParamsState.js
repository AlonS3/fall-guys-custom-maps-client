import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

export function useSearchParamsState(searchParamName, defaultValue) {
  const [searchParams, setSearchParams] = useSearchParams();

  const acquiredSearchParam = searchParams.get(searchParamName);
  const searchParamsState = acquiredSearchParam ?? defaultValue;

  const setSearchParamsState = useCallback((newState, resetPage) => {
    const resetPageNumber = resetPage ?? false
    setSearchParams(prev => {
      //const currentParams = Object.fromEntries([...prev]);
      const currentParams = Object.fromEntries(new URLSearchParams(window.location.search));
      if (resetPageNumber) currentParams.page = 1
      return Object.assign({}, currentParams, { [searchParamName]: newState })
    });
  },[]);

  
  return [searchParamsState, setSearchParamsState];
}
