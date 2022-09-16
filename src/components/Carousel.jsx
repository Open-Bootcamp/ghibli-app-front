import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

// Settings for the slider
const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '120px',
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  vertical: true,
  verticalSwiping: true,
  swipeToSlide: true

}

export default function Carousel () {
  const [slider, setSlider] = useState(null)

  const cards = [
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg',
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg'
  ]

  return (
    <Box
      position='relative'
      h='600px'
      w='500px'
      overflow='hidden'
    >
      <Button
        aria-label='left-arrow'
        bg='transparent'
        color='white'
        borderRadius='full'
        position='absolute'
        _hover={{
          background: 'transparent',
          color: 'gray.300'
        }}
        top='0'
        right='50%'
        transform='translate(50%, -20%)'
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BsChevronUp fontSize='3rem' />
      </Button>

      <Button
        aria-label='right-arrow'
        textColor='white'
        borderRadius='full'
        position='absolute'
        bg='transparent'
        _hover={{
          background: 'transparent',
          color: 'gray.300'
        }}
        bottom='0'
        right='50%'
        transform='translate(50%, 20%)'
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BsChevronDown fontSize='3rem' />
      </Button>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height='400px'
            position='relative'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}
