import React, { useCallback, memo } from "react"

import { Button, HStack, Text } from "@chakra-ui/react"
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons"

const PagesNavigation = ({ pageNumber, setPageNumber, totalPages, hasNextPage }) => {
  const handleNextPage = useCallback(() => {
    setPageNumber(parseInt(pageNumber) + 1)
  }, [setPageNumber, pageNumber])

  const handlePreviousPage = useCallback(() => {
    if (pageNumber > 1) {
      setPageNumber(parseInt(pageNumber) - 1)
    }
  }, [setPageNumber, pageNumber])

  return (
    <HStack justifyContent="center">
      <Button
        onClick={handlePreviousPage}
        leftIcon={<ArrowBackIcon />}
        colorScheme="blue"
        variant="ghost"
        size="sm"
        isDisabled={pageNumber <= 1}
        _disabled={{ opacity: 0.4, cursor: "default" }}
      >
        Previous Page
      </Button>
      <Text>
        {pageNumber}/{totalPages}
      </Text>
      <Button
        onClick={handleNextPage}
        rightIcon={<ArrowForwardIcon />}
        colorScheme="blue"
        variant="ghost"
        size="sm"
        isDisabled={!hasNextPage}
        _disabled={{ opacity: 0.4, cursor: "default" }}
      >
        Next Page
      </Button>
    </HStack>
  )
}

export default memo(PagesNavigation)
