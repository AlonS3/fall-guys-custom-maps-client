import React, { memo } from "react";

import SearchSection from "./SearchSection";
import CategoriesBar from "./CategoriesBar";

import { Heading, Box, useColorModeValue } from "@chakra-ui/react";

const TopSection = ({
  query,
  setQuery,
  handleChooseCategory,
  mapCategory,
}) => {
  const title = "Explore the Fall Guys\nCommunity Maps";
  return (
    <Box
      bgGradient={useColorModeValue(
        "linear(to-t, #ffffff 10%, #FFF5F7 50%, #ffffff 90%)",
        "linear(to-t, gray.800 10%, gray.700 50%, gray.800 90%)"
      )}
      overflow="hidden"
    >
      <Heading
        as="h1"
        size="lg"
        lineHeight="normal"
        textAlign="center"
        py="40px"
        whiteSpace="pre-wrap"
      >
        {title}
      </Heading>
      <SearchSection
        query={query}
        setQuery={setQuery}
      />
      <CategoriesBar
        handleChooseCategory={handleChooseCategory}
        mapCategory={mapCategory}
      ></CategoriesBar>
    </Box>
  );
};

export default memo(TopSection);
