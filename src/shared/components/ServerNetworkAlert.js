import React from 'react'

import useRQGlobalState from '../react-query/useRQGlobalState'

import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton
} from '@chakra-ui/react'

const ServerNetworkAlert = () => {
  const [isVisibleServerAlert, setIsVisibleServerAlert] = useRQGlobalState('networkErrorAlert', false)

  const closeAlert = () => {
    setIsVisibleServerAlert(false)
  }

  return isVisibleServerAlert ? (
    <Box position={"fixed"} top={0} left={0} zIndex={6} mt={16} w="100%">
    <Alert status='error'   borderRadius={6} maxW="fit-content" p={1} ml={{sm:"40px" , xl:"200px"}}>
      <AlertIcon fontSize="xx-small" mx="12px"  boxSize={4}/>
      <Box>
        <AlertTitle fontSize="sm">Server Connection Error</AlertTitle>
        {/* <AlertDescription>We're sorry, but we are currently unable to establish a connection to the server. This may be due to a temporary server issue or a problem with your internet connection. Please try again later or check your internet connection.</AlertDescription> */}
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        onClick={closeAlert}
        ml="auto"
        fontSize="xx-small"
      />
    </Alert>
    </Box>
    
  ) : null
}

export default ServerNetworkAlert