import React from "react"

import { Stack } from "@chakra-ui/react"
import InformationPanel from "./InformationPanel"
import PrivateInfoBody from "./PrivateInfoBody"
import PublicInfoBody from "./PublicInfoBody"

const ProfileInformationSection = () => {
  return (
    <Stack direction={{ base: "column", lg: "row" }} p={2} mt={10}>
      <InformationPanel title="Public User Info:" grow={2} shrink={1}>
        <PublicInfoBody />
      </InformationPanel>
      <InformationPanel title="Linked Google Account: (Private Info)" grow={1} shrink={0}>
        <PrivateInfoBody />
      </InformationPanel>
    </Stack>
  )
}

export default ProfileInformationSection
