import { Text, Image, Flex } from '@chakra-ui/react'
import '../Common/borders.css'

function CardCharacters ({ character }) {
  return (
    <Flex
      className='border'
      flexDir='column' align='center' w='240px' h='190px'
    >
      <Image
        borderRadius='100%'
        w='120px'
        h='120px'
        objectFit='cover'
        src={character.url}
      />
      <Text
        pt='10px'
        fontWeight='600'
        fontSize='20px'
        textAlign='center'
        color='white'
        w='100%'

      >{character.name}
      </Text>
    </Flex>
  )
}

export default CardCharacters
