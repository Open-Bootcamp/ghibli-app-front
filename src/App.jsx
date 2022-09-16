import { Center } from '@chakra-ui/react'
import Banner from './components/Banner'
import Carousel from './components/Carousel'

function App () {
  return (
    <>
      <Banner />
      <Center minH='100vh' bg='gray.700'>
        <Carousel />
      </Center>
    </>
  )
}

export default App
