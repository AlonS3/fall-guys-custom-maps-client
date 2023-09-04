import React from "react"

import { Container, Heading } from "@chakra-ui/react"

import ProfileInformationSection from "./components/ProfileInformationSection"
import UserMaps from "./components/UserMaps"

const Profile = () => {
  return (
    <Container maxWidth={"container.xl"}>
      <Heading size={"lg"} fontWeight={"bold"} mt={10}>
        My Profile:
      </Heading>
      <ProfileInformationSection />
      <Heading size={"lg"} fontWeight={"bold"} mt={10}>
        My Maps:
      </Heading>
      <UserMaps />
      <Heading size={"lg"} fontWeight={"bold"} mt={10}>
        Liked Maps:
      </Heading>
    </Container>
  )
}

export default Profile
