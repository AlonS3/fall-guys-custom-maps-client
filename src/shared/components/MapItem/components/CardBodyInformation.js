import { Link as ReactRouterLink } from 'react-router-dom'

import {Flex, Heading, Text, Link} from "@chakra-ui/react"

const CardBodyInformation = ( { map , mapLinkPath, userLinkPath} ) => {
  return (
    <Flex p={2} flexDirection="column" flexGrow="1" overflow="hidden">
        <Heading size='sm' noOfLines={1} flexShrink={0}><Link as={ReactRouterLink} to={mapLinkPath} style={{width: "100%", display: "block"}}>{map.title}</Link></Heading>
        <Text flexGrow={1}  my={2} fontSize='sm' overflow="hidden" overflowY="hidden" _hover={{overflowY:"auto"}} lineHeight="4">
        {map.description}
        </Text>
        <Flex direction="row" justify="space-between" flexShrink={0}>
            <Text textOverflow="ellipsis" overflow="hidden" textAlign="center" color="teal.600" fontSize='sm' textTransform="none" whiteSpace="nowrap">
                <Link as={ReactRouterLink} to={userLinkPath}>{map.creator.nickname}</Link>
            </Text>
            <Text fontSize='sm' flexShrink={0}>
                {new Date(map.createdAt).toLocaleDateString("en-US", { year: '2-digit', month: 'numeric', day: 'numeric' })}
            </Text>
        </Flex>
        
    </Flex>
  )
}

export default CardBodyInformation