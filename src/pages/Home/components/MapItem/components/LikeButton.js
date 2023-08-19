import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { BiSolidCrown, BiCrown } from "react-icons/bi"
import { Button, Icon, Box, useStyleConfig } from "@chakra-ui/react"

import { AuthContext } from "../../../../../shared/context/authContext"

import { useMutation } from "react-query"
import { likeMap } from "../../../../../api/backendApi"

const LikeButton = ({ map, setLikesCounter }) => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [liked, setLiked] = useState(map.isLikedByCurrentUser)

  const { mutate, isLoading } = useMutation(({ likeAction }) => likeMap({ functionName: likeAction, mapId: map._id }), {
    // Optimistic update
    onMutate: ({ likeAction }) => {
      // Capture the current state before applying the optimistic update
      const previousState = { liked }
      if (likeAction === "like") {
        setLiked(true)
        setLikesCounter((prev) => prev + 1)
      } else {
        setLiked(false)
        setLikesCounter((prev) => prev - 1)
      }

      // Return the captured state which will be used as context in other lifecycle methods
      return previousState
    },
    // If the mutation fails, rollback to the previous value
    onError: (error, variables, context) => {
      if (error?.response?.status !== 400) {
        // 400 is not an actual error
        // if the server and the client in sync but there is an error
        setLiked(context.liked)
        // restore the previous counter
        if (context.liked) {
          setLikesCounter((prev) => prev + 1)
        } else {
          setLikesCounter((prev) => prev - 1)
        }
      }
    },
  })

  const handleLikeClick = async () => {
    if (auth.isLoggedIn) {
      if (liked) {
        mutate({ likeAction: "unlike" })
      } else {
        mutate({ likeAction: "like" })
      }
    } else {
      navigate("/login")
    }
  }

  const defaultButtonStyles = useStyleConfig("Button", {
    variant: "ghost",
    colorScheme: "yellow",
    size: "xs",
  })

  const defaultHoverStyles = defaultButtonStyles._hover || {}

  const mergedHoverStyles = {
    _hover: {
      ...defaultHoverStyles,
      ".hover-text": {
        opacity: 1,
      },
    },
  }

  return (
    <Button
      isDisabled={isLoading}
      variant="ghost"
      colorScheme="yellow"
      size="xs"
      onClick={handleLikeClick}
      fontSize="xs"
      sx={mergedHoverStyles}
      _disabled={{ opacity: 1, cursor: "default" }}
    >
      {liked && auth.isLoggedIn ? (
        <>
          <Box opacity={0} className="hover-text">
            Uncrown
          </Box>
          <Icon as={BiSolidCrown} ml={1} boxSize={5} />
        </>
      ) : (
        <>
          {auth.isLoggedIn ? "Crown" : "Give a Crown"}
          <Icon as={BiCrown} ml={1} boxSize={5} />
        </>
      )}
    </Button>
  )
}

export default LikeButton
