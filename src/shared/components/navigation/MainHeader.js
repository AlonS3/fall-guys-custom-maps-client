import React, { useState, useEffect } from "react"

import "./MainHeader.css"

import { Box } from "@chakra-ui/react"

const MainHeader = ({ children, ...rest }) => {
  const [scrolled, setScrolled] = useState(false)

  // const handleScroll = () => {
  //   const offset = window.scrollY
  //   if (offset > 0) {
  //     setScrolled(true)
  //   } else {
  //     setScrolled(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  let navbarClasses = []
  // if (scrolled) {
  //   navbarClasses.push("main-header-box-scrolled")
  // }

  return (
    <Box {...rest} className={navbarClasses.join(" ")}>
      {children}
    </Box>
  )
}

export default MainHeader
