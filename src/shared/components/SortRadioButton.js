import React, { useRef, memo } from "react"

import { HStack, useRadioGroup, Icon, Tooltip } from "@chakra-ui/react"

import RadioCard from "../../pages/Home/components/RadioCard"

import { IoBarChartSharp } from "react-icons/io5"

import { BiSolidCrown } from "react-icons/bi"

import { FaClock } from "react-icons/fa6"

const SortRadioButton = ({ sortByOption, setSortByOption }) => {
  const options = useRef([
    { title: "Trending", icon: IoBarChartSharp },
    { title: "Popularity", icon: BiSolidCrown },
    { title: "Date", icon: FaClock },
  ])
  // const options = useRef(["Trending", "Popularity", "Date"])

  const handleRadioChange = (e) => {
    console.log(e)
    setSortByOption(e)
  }
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "sort",
    value: sortByOption,
    onChange: handleRadioChange,
  })
  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.current.map((value, index) => {
        const radio = getRadioProps({ value: value.title })
        return (
          <RadioCard key={index} {...radio}>
            <Tooltip label={value.title} placement="top">
              <span>
                <Icon as={value.icon} boxSize={6} display={"block"} />
              </span>
            </Tooltip>
          </RadioCard>
        )
      })}
    </HStack>
  )
}

export default memo(SortRadioButton)
