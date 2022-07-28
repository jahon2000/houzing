import React from 'react'
import Filter from '../../components/Filter'
// import AliseCarousel from '../AliceCarousel'
// import Card from '../Card'
import Carousel from '../Carousel'
import Cards from '../Carousel/Cards'
import Choose from '../Chose'
import Elastic from '../Elastic'
import Recent from '../Recent'
import Recommem from '../Recommem'
import Slick from '../Slick'
import Test from '../Testminol'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommem />
      {/* <AliseCarousel/> */}
      <Elastic/>
      {/* <Card/> */}
      <Choose />
      <Slick />
      <Cards />
      <Recent />
      <Test/>
    </Container>
  )
}
export default Home
