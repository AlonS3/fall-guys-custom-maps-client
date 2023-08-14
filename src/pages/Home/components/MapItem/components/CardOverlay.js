import { Flex, Text, Icon, Link  } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { BiSolidCrown } from 'react-icons/bi'


function formatNumber(number) {
    if (number >= 1000) {
      var suffixes = ["", "k", "M", "B", "T"];
      var suffixIndex = Math.floor(Math.log10(number) / 3);
      var shortNumber = (number / Math.pow(1000, suffixIndex)).toFixed(1) + suffixes[suffixIndex];
      return shortNumber;
    }
    return number.toString();
  }

const CardOverlay = ( {map, mapLinkPath} ) => {
  return (
    <Link as={ReactRouterLink} to={mapLinkPath} color='teal.500'>
      <Flex position="absolute" direction="row" justify="space-between" w="full" p={0} overflow="hidden" zIndex={2}>
        <Flex overflow="hidden" alignItems="center">
            <Text fontSize="md" fontWeight="semibold" textColor="black" lineHeight="normal" overflow="hidden" textTransform="none" whiteSpace="nowrap" textOverflow="ellipsis" textShadow="0px 0px 2px #FFFFFF, 0px 0px 20px #FFFFFF, 0px 0px 5px #FFFFFF, 0px 0px 10px #FFFFFF" p={2}>{formatNumber(map.likesCount)}</Text>
            <Icon as={BiSolidCrown} color="yellow.500" flexGrow={1}/>
        </Flex>
        <Text right="0px" fontSize="xs" p={2} textColor="white" backgroundColor={"blue.300"} borderBottomLeftRadius={"lg"} borderTopRightRadius={"md"} px={2} py={0} height={"fit-content"} >
            {map.category}
        </Text>
      </Flex>
    </Link>
  )
}

export default CardOverlay