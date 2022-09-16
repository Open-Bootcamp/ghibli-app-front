import { ChakraProvider, Box, Text, Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import IndividualMovie from './IndividualMovie'
// import IndividualMovie from './IndividualMovie'
export default function GridSection () {
  const [datas, setData] = useState([])

  useEffect(() => {
    async function response () {
      await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }
    response()
    console.log(datas)
  }, [])

  const listaMovies = datas.slice(0, 10).map((movie) => {
    return (
      <div key={movie.id}>
        <IndividualMovie movie={movie} />
      </div>
    )
  })

  return (
    <ChakraProvider>
      <Box bg='#000000' w='100vw' h='auto'>
        <Box margin='0 auto' maxWidth='800px'>
          <Text color='white' pt='30px' pb='30px' fontSize='30px' fontWeight='800'>Popular Movies</Text>
          <Grid gridTemplateColumns='repeat(4, 1fr)'>
            {listaMovies}
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
