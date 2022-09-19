import { GridItem, Image, Text } from '@chakra-ui/react'

function CardMovie ({ movie }) {
  return (
    <GridItem w='auto' h='auto'>
      <Image maxW='253px' h='380px' src={movie.image} objectFit='cover' />
      <Text textAlign='left' mt='0.5rem' mb='50px' maxW='253px' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis' color='white' fontSize='lg' fontWeight='bold'> {movie.title} </Text>
    </GridItem>
  )
}

export default CardMovie
