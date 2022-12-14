import { Box } from '@chakra-ui/react'
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
  centerPadding: '200px',
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
    'https://image.tmdb.org/t/p/original/fRtaDgmj0CirvqFUG1XN48BDY1l.jpg',
    'https://image.tmdb.org/t/p/original/jScPd0u0jeo66l8gwDl7W9hDUnM.jpg',
    'https://image.tmdb.org/t/p/original/h5pAEVma835u8xoE60kmLVopLct.jpg',
    'https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg'
  ]

  return (
    <Box
      position='relative'
      h='710px'
      w='450px'
      overflow='hidden'
      paddingTop='14'
    >
      <Box
        aria-label='left-arrow'
        bg='transparent'
        color='white'
        borderRadius='full'
        position='absolute'
        _hover={{
          background: 'transparent',
          color: 'gray.300'
        }}
        top='2'
        right='50%'
        transform='translate(50%, -20%)'
        zIndex={2}
        cursor='pointer'
        onClick={() => slider?.slickPrev()}
      >
        <BsChevronUp fontSize='3rem' />
      </Box>
      <Box
        position='relative'
        h='600px'
        w='450px'
        overflow='hidden'
        paddingTop='0'
        bgGradient='linear(to-t, blackAlpha.900, transparent)'
      >
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height='200px'
              position='relative'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Box
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
        cursor='pointer'
        onClick={() => slider?.slickNext()}
      >
        <BsChevronDown fontSize='3rem' />
      </Box>
    </Box>

  )
}
