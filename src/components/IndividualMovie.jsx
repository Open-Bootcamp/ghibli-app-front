import { Box, Image, Text } from '@chakra-ui/react'

export default function IndividualMovie (props) {
  console.log(props)
  return (
    <Box w='auto' h='auto' pl='50px'>
      <Image border='1px solid white' w='150px' h='250px' src='https://via.placeholder.com/600/92c952' />
      <Text textAlign='left' mt='5px' mb='50px' color='white' fontSize='15px' fontWeight='700'>Name movie </Text>
    </Box>
  )
}
