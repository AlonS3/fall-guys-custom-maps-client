import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export function useURLState(queryParamName, defaultValue) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the initial value from the URL, or use the default value
  const urlValue = searchParams.get(queryParamName);
  const initialValue = urlValue ?? defaultValue;

  // Create a state variable
  const [value, setValue] = useState(initialValue);

  // Refs to track first render and back/forward navigation
  const isFirstRender = useRef(true);
  const isURLUpdateDueToStateChange = useRef(false);

  // Effect to update the URL whenever the state changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // It's no longer the first render
    } else {
      if (isURLUpdateDueToStateChange.current) {
        // Skip the URL update for back/forward navigation
        isURLUpdateDueToStateChange.current = false;
      } else {
        console.log("update url based on state");
        setSearchParams((prev) => {
          const currentParams = Object.fromEntries([...prev]);
          if (value == null) {
            delete currentParams[queryParamName];
            return Object.assign({}, currentParams);
          } else {
            return Object.assign({}, currentParams, {
              [queryParamName]: value,
            });
          }
        });
        // The next state update will be due to a URL change
        isURLUpdateDueToStateChange.current = true;
      }
    }
  }, [queryParamName, value]);

  // Effect to update the state when the URL changes
  useEffect(() => {
    const urlValue = searchParams.get(queryParamName);
    if (isURLUpdateDueToStateChange.current) {
      // Skip the state update for URL changes due to state updates
      isURLUpdateDueToStateChange.current = false;
    } else {
      if (urlValue !== value) {
        console.log("update state based on url");
        setValue(urlValue ?? defaultValue);
        // The next URL update will be due to a state change
        isURLUpdateDueToStateChange.current = true;
      }
    }
  }, [searchParams, queryParamName, defaultValue, value]);

  return [value, setValue];
}
