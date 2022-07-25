import React from 'react'
import Filter from '../../components/Filter'
// import AliseCarousel from '../AliceCarousel'
import Card from '../Card'
import Carousel from '../Carousel'
// import Elastic from '../Elastic'
import Recommem from '../Recommem'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommem />
      {/* <Elastic/> */}
      {/* <AliseCarousel/> */}
      <Card/>
    </Container>
  )
}
export default Home
