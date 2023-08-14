import React, {useState, useEffect} from 'react'
import { Tabs, TabList, Tab, Text } from '@chakra-ui/react'


const categories = ['All', 'Casual', 'Art', 'Challenge'];

export default function CategoriesBar({handleChooseCategory, mapCategory}) {
  const [tabIndex, setTabIndex] = useState(0)
  useEffect(() => {
    const index = categories.indexOf(mapCategory)
    setTabIndex(index)
  }, [mapCategory])

  const tabChangeHandler = (index) => {
    setTabIndex(index)
    handleChooseCategory(categories[index]);
  }

  return (
    <>
      <Text as={"h3"} textAlign="center" fontSize="xl" fontWeight="medium" mt="20px">Categories</Text>
      <Tabs align='center' variant='enclosed' mt="20px" size="lg" mb="1px" onChange={tabChangeHandler} index={tabIndex}>
        <TabList>
          {categories.map((category, index) => (
              <Tab key={index}>{category}</Tab>
            ))}
        </TabList>
      </Tabs>
    </>
  )
}
