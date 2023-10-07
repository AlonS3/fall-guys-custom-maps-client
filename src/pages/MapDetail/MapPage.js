import React, { useContext } from "react"
import { useParams } from "react-router-dom"

import { AuthContext } from "../../shared/context/authContext"
import { useQuery } from "react-query"
import { getMapData } from "../../api/backendApi"

import { Container } from "@chakra-ui/react"

import Carousel from "./components/Carousel"

import BgPattern from "../../shared/components/BgPattern"

const Map = () => {
  const mapId = useParams().mapId
  const auth = useContext(AuthContext)

  const {
    isLoading,
    isError,
    data: map,
  } = useQuery(["map", mapId], () => getMapData(mapId), {
    staleTime: 1000 * 60,
  })
  return (
    <>
      <BgPattern />
      <Container maxW={"container.xl"} pt={20}>
        {!isLoading && !isError && <Carousel images={map.images} />}
      </Container>
    </>
  )
}

export default Map
