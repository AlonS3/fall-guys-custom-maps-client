import React, { useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidCrown, BiCrown } from "react-icons/bi";
import { Button, Icon } from "@chakra-ui/react";

import { AuthContext } from "../../../../../shared/context/authContext";

import { useMutation } from "react-query";
import { likeMap } from "../../../../../api/backendApi";

const LikeButton = ({ map }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [liked, setLiked] = useState(map.isLikedByCurrentUser);

  const { mutate, isLoading } = useMutation(likeMap)

  const handleLikeClick = async () => {
    if (auth.isLoggedIn) {
      
      const previousState = liked;
      let url;
      if (previousState){
        url = "unlike"
      }else{
        url = "like"
      }

      mutate({functionName: url, mapId: map._id}, {
        onSuccess: (data) => {
          setLiked( data.like )
        },
        onError: (error) => {
          if (error?.response?.status === 400){
            setLiked( prev => !prev )
          }
        }
      })

    } else {
      navigate("/login");
    }
  };


  return (
    <Button
        isDisabled={isLoading}
      variant="ghost"
      colorScheme="yellow"
      size="xs"
      onClick={handleLikeClick}
      fontSize="xs"
    >
      {liked && auth.isLoggedIn ? (
        <>
          Uncrown <Icon as={BiSolidCrown} ml={1} boxSize={5} />
        </>
      ) : (
        <>
          {auth.isLoggedIn ? "Crown" : "Give a Crown"}
          <Icon as={BiCrown} ml={1} boxSize={5} />
        </>
      )}
    </Button>
  );
};

export default LikeButton;
