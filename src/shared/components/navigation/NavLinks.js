import React, { useContext } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import "./NavLinks.css"

import { AuthContext } from "../../context/authContext"

import { Link, useColorModeValue } from "@chakra-ui/react"

import useModalManager from "../../hooks/useModalManager"

const NavLinkObject = ({ children, ...rest }) => (
  <Link
    as={NavLink}
    px={2}
    py={1}
    fontWeight="semibold"
    rounded={"md"}
    color={"#86c3eb"}
    whiteSpace={"nowrap"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    {...rest}
  >
    {children}
  </Link>
)

const NavLinkDummyObject = ({ children, ...rest }) => (
  <Link
    tabIndex={0}
    px={2}
    py={1}
    fontWeight="semibold"
    rounded={"md"}
    color={"#86c3eb"}
    whiteSpace={"nowrap"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    {...rest}
  >
    {children}
  </Link>
)

const NavLinks = ({ closeDrawer }) => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const { openModal } = useModalManager()

  const addMapClickHandler = () => {
    if (auth.isLoggedIn) {
      openModal("newMap")
    } else {
      if (location.pathname !== "/login") {
        navigate("/login")
      }
    }
    if (closeDrawer) {
      closeDrawer()
    }
  }

  const logOutClickHandler = () => {
    auth.logout()
    if (closeDrawer) {
      closeDrawer()
    }
  }
  const loginBgColor = useColorModeValue("cyan.500", "cyan.800")

  return (
    <>
      <NavLinkObject to="/" className="nav-link-item" onClick={closeDrawer && closeDrawer}>
        Home
      </NavLinkObject>
      {auth.isLoggedIn && (
        <NavLinkObject to="/profile" className="nav-link-item" onClick={closeDrawer && closeDrawer}>
          Profile
        </NavLinkObject>
      )}
      <NavLinkDummyObject onClick={addMapClickHandler}>Add Map</NavLinkDummyObject>

      {/* <NavLinkObject to="/users" className='nav-link-item' onClick={closeDrawer && closeDrawer}>Users</NavLinkObject> */}
      {!auth.isLoggedIn && (
        <NavLinkObject to="/about" className="nav-link-item" onClick={closeDrawer && closeDrawer}>
          About
        </NavLinkObject>
      )}
      {!auth.isLoggedIn && (
        <NavLinkObject
          to="/login"
          py={1.5}
          px={4}
          bgColor={loginBgColor}
          color="white"
          fontWeight="semibold"
          _hover={{ color: "black" }}
          onClick={closeDrawer && closeDrawer}
        >
          Login
        </NavLinkObject>
      )}
      {auth.isLoggedIn && <NavLinkDummyObject onClick={logOutClickHandler}>Logout</NavLinkDummyObject>}
    </>
  )
}

export default NavLinks
