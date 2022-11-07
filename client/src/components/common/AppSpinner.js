import { Spinner } from "@chakra-ui/react";

const AppSpinner = () => {
  return (
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      position="absolute"
      left="50%"
    />
  )
}

export default AppSpinner;