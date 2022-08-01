import React from 'react'
import Filter from '../../components/Filter'
// import Card from '../Card'
import Carousel from '../Carousel'
import Cards from '../Carousel/Cards'
import Choose from '../Chose'
import Footer from '../Footer'
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
      <Choose />
      <Slick />
      <Cards />
      <Recent />
      <Test />
      <Footer/>
    </Container>
  )
}
export default Home
