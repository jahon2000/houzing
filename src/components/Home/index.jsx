import React from 'react'
import Filter from '../../components/Filter'
import Carousel from '../Carousel'
import Recommem from '../Recommem'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommem/>
    </Container>
  )
}
export default Home
