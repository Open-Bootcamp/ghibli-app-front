import { Flex } from '@chakra-ui/react'
import Banner from './components/Banner'
import Carousel from './components/Carousel'
import GridSection from './components/GridSection'

function App () {
  return (
    <>
      <Banner />
      <Flex
        minH='100vh'
        bg='gray.700'
        flexDirection='column'
        alignItems='center'
        fontFamily='Inter, sans-serif'
      >
        <Carousel />
        <GridSection />
      </Flex>
    </>
  )
}

export default App
