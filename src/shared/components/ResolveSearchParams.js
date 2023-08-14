import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import * as yup from 'yup';


const searchParamsSchema = yup.object().shape({
  category: yup.string().oneOf(["All", "Casual", "Art", "Challenge"]).required(),
  query: yup.string().nullable(),
  page: yup.number().integer().positive().required(),
  sort: yup.string().oneOf(["Trending", "Popularity", "Date"]).required()
}).noUnknown(true); // this prevents unknown keys



function extractValidData(data, error) {
  const errorKeys = error.inner.map(err => err.path);
  return Object.keys(data).reduce((validData, key) => {
    if (!errorKeys.includes(key)) {
      validData[key] = data[key];
    }
    return validData;
  }, {});
}



// Function to validate and set default values
async function validateAndSetDefaults(data) {
  try {
    // Validate the data against the schema
    await searchParamsSchema.validate(data, { abortEarly: false, stripUnknown: false });

    // Data is valid, no need to set defaults
    return {valid: true, data};
  } catch (error) {
    // Validation failed, set default values for failed properties
    const defaults = {
      category: 'Casual',
      query: '',
      page: 1,
      sort: 'Popularity'
    };

    // Extract valid data
    const validData = extractValidData(data, error);

    // Merge defaults with the failed properties
    const mergedData = {
      ...defaults,
      ...validData, // Extract the failed properties from the error object
    };

    return {valid: false, data: mergedData};
  }
}



const useResolveSearchParams = ({ children }) => {
  const [resolved, setResolved] = useState(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();


  const createSearchParamsString = useCallback((curParams) => {
    const searchParams = new URLSearchParams("");
    if (curParams.query){
      searchParams.set("query", curParams.query);
    }
    searchParams.set("category", curParams.category);
    searchParams.set("sort", curParams.sort);
    searchParams.set("page", curParams.page);
    const url = `?${searchParams.toString()}`;
    return url;
  }, []);

  useEffect(() => {
    if (!resolved) {
      async function resolve() {
        // read the params on component load and when any changes occur
        const currentParams = Object.fromEntries([...searchParams]);
        const results = await validateAndSetDefaults(currentParams);
        if (!results.valid) {
          // If the currentParams are not valid, update the URL directly to the default valid parameters
          const defaultParamsString = createSearchParamsString(results.data);
          console.log("redirecting to /" + defaultParamsString);
          navigate(defaultParamsString, { replace: true });
        } else {
          setResolved(true);
        }
      }
      resolve()
    }
  }, [searchParams, createSearchParamsString, navigate, resolved]);

  return resolved ? children : null;
};

export default useResolveSearchParams;
