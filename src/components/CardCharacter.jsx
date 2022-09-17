import { Box, Text, Image } from '@chakra-ui/react'

function CardCharacters ({ charact }) {
  return (
    <Box>
      <Image
        borderRadius='100%'
        w='100px'
        h='100px'
        objectFit='cover'
        src='https://media.vogue.es/photos/5ff05e472361f90ef2d5d967/2:3/w_1600,c_limit/HP_TOTORO_Registration_2880x1620.jpg'
      />
      <Text
        pt='10px'
        mb='80px'
        fontWeight='600'
        fontSize='20px'
        color='white'
        w='89px'
      >Totoro
      </Text>
    </Box>
  )
}

export default CardCharacters
