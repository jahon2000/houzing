import React from 'react'
import Filter from '../../components/Filter'
// import AliseCarousel from '../AliceCarousel'
// import Card from '../Card'
import Carousel from '../Carousel'
import Cards from '../Carousel/Cards'
// import Category from '../Category'
import Choose from '../Chose'
import Elastic from '../Elastic'
import Recommem from '../Recommem'
import Slick from '../Slick'
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
      {/* <Category/> */}
      <Slick />
      <Cards/>
    </Container>
  )
}
export default Home
