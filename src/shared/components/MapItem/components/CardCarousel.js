import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Box, Image, Link, IconButton, Text } from '@chakra-ui/react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const CardCarousel = ({images, mapLinkPath}) => {
    const [imageIndex, setImageIndex] = useState(0)

    const nextImage = () => {
        setImageIndex(prevIndex => {
            if ((prevIndex + 1) >= images.length){
                return 0;
            }
            else{
                return prevIndex + 1
            }
        })
    }

    const previousImage = () => {
        setImageIndex(prevIndex => {
            if ((prevIndex - 1) < 0){
                return images.length -1;
            }
            else{
                return prevIndex - 1
            }
        })
    }
  return <Box position="relative">
    <Text 
        position={"absolute"}
        color={"whiteAlpha.900"}
        bottom={"0%"}
        right={"0%"}
        transform={'translate(-0%, 0%)'}
        textShadow="lg"
        fontSize={"xs"}
        paddingRight={2}
        paddingBottom={1}
        fontWeight={"medium"}
        >
        {imageIndex + 1}/{images.length}
        </Text>
    <IconButton
        onClick={previousImage}
        aria-label="left-arrow"
        color={"whiteAlpha.900"}
        variant="ghost"
        borderRadius="lg"
        position="absolute"
        left={2}
        top={"50%"}
        minW={"auto"}
        h={"auto"}
        padding={2}
        _hover={{"background": "whiteAlpha.400"}}
        transform={'translate(0%, -50%)'}
        zIndex={2}>
        <SlArrowLeft />
      </IconButton>
      <IconButton
        onClick={nextImage}
        aria-label="right-arrow"
        color={"whiteAlpha.900"}
        variant="ghost"
        borderRadius="lg"
        position="absolute"
        right={2}
        top={"50%"}
        minW={"auto"}
        h={"auto"}
        padding={2}
        _hover={{"background": "whiteAlpha.400", "fontWeight": "bold"}}
        transform={'translate(0%, -50%)'}
        zIndex={2}>
        <SlArrowRight />
      </IconButton>
    <Link as={ReactRouterLink} to={mapLinkPath} color='teal.500'>
    <Image
        width={220}
        height={150}
        objectFit='cover'
        src={images[imageIndex]}
        alt='Green double couch with wooden legs'
        borderTopRadius={6}
        flexShrink={0}
    />
    </Link>
  </Box>
}

export default CardCarousel