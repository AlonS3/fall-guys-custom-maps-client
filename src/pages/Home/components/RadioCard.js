import React from 'react'
import { Box, useRadio } from '@chakra-ui/react';

const RadioCard = (props) => {
    const { getInputProps, getRadioProps } = useRadio(props);
  
    const input = getInputProps();
    const checkbox = getRadioProps();
  
    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="sm"
          _checked={{
            bg: "blue.600",
            color: "white",
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={2}
          py={1}
          fontSize="sm"
        >
          {props.children}
        </Box>
      </Box>
    );
  }


  export default RadioCard