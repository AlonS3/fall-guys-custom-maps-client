import React, { useContext } from "react"

import { Container, Heading } from "@chakra-ui/react"
import { AuthContext } from "../../shared/context/authContext"

import ProfileInformationSection from "./components/ProfileInformationSection"
import UserMaps from "./components/UserMaps"
import UserLikedMaps from "./components/UserLikedMaps"

const Profile = () => {
  const auth = useContext(AuthContext)
  const userId = auth.userData.id

  return (
    <Container maxWidth={"container.xl"} pt={20}>
      <Heading size={"lg"} fontWeight={"bold"} mt={10}>
        Profile:
      </Heading>
      <ProfileInformationSection />
      <Heading size={"lg"} fontWeight={"bold"} mt={10}>
        My Maps:
      </Heading>
      <UserMaps userId={userId} />
      <Heading size={"lg"} fontWeight={"bold"} mt={10}>
        Liked Maps:
      </Heading>
      <UserLikedMaps />
    </Container>
  )
}

export default Profile
