import { GridItem, Image, Text } from '@chakra-ui/react'

export default function IndividualMovie ({ movie }) {
  return (
    <GridItem w='auto' h='auto'>
      <Image maxW='280px' h='380px' src={movie.image} objectFit='cover' />
      <Text textAlign='left' mt='0.5rem' mb='50px' color='white' fontSize='lg' fontWeight='bold'> {movie.title} </Text>
    </GridItem>
  )
}
