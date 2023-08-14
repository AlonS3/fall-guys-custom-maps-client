import React, { useRef, memo } from 'react'

import { HStack, useRadioGroup } from '@chakra-ui/react';

import RadioCard from './RadioCard';



const SortRadioButton = ( { sortByOption, setSortByOption} ) => {
  const options = useRef(['Trending', 'Popularity', 'Date'])

    const handleRadioChange = (e) => {
        setSortByOption(e)
    }
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'sort',
        value: sortByOption,
        onChange: handleRadioChange,
      })
    const group = getRootProps()

  return (
    <HStack {...group}>
      {options.current.map((value, index) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={index} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}


export default memo(SortRadioButton)