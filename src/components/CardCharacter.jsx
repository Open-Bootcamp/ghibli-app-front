import { Box, Text, Image } from '@chakra-ui/react'

function CardCharacters ({ charact }) {
  return (
    <Box>
      <Image
        borderRadius='100%'
        w='100px'
        h='100px'
        objectFit='cover'
        src={charact.url}
      />
      <Text
        pt='10px'
        mb='80px'
        fontWeight='600'
        fontSize='20px'
        color='white'
        w='89px'
      >{charact.name}
      </Text>
    </Box>
  )
}

export default CardCharacters
