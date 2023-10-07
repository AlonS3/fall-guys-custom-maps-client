import React, { useState, useEffect } from "react"
import { Tabs, TabList, Tab, TabIndicator, useColorModeValue } from "@chakra-ui/react"

const categories = ["All", "Casual", "Art", "Challenge"]

export default function CategoriesBar({ handleChooseCategory, mapCategory }) {
  const [tabIndex, setTabIndex] = useState(0)
  useEffect(() => {
    const index = categories.indexOf(mapCategory)
    setTabIndex(index)
  }, [mapCategory])

  const tabChangeHandler = (index) => {
    setTabIndex(index)
    handleChooseCategory(categories[index])
  }

  return (
    <>
      <Tabs variant="unstyled" size="lg" onChange={tabChangeHandler} index={tabIndex}>
        <TabList>
          {categories.map((category, index) => (
            <Tab key={index} fontSize={"x-large"} fontWeight={"medium"} p={0} mx={3} my={1}>
              {category}
            </Tab>
          ))}
        </TabList>
        <TabIndicator mt="-3.5px" height="3px" bg={"var(--chakra-colors-chakra-body-text)"} borderRadius="3px" />
      </Tabs>
    </>
  )
}
