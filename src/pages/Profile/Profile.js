import React from "react"

import { Container, Heading } from "@chakra-ui/react"

import ProfileInformationSection from "./components/ProfileInformationSection"

const Profile = () => {
  return (
    <Container maxWidth={"container.xl"}>
      <Heading size={"lg"} fontWeight={"bold"} mt={10}>
        Your Profile:
      </Heading>
      <ProfileInformationSection />
      <Heading size={"lg"} fontWeight={"bold"} mt={10}>
        Your Maps:
      </Heading>

      <Heading size={"lg"} fontWeight={"bold"} mt={10}>
        Liked Maps:
      </Heading>
    </Container>
  )
}

export default Profile
