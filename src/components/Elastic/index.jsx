import React from 'react'
import Carousel from 'react-elastic-carousel'
import Card from '../Generic/Card'
const breakPoints = [
  { with: 1, itmesToShow: 1 },
  { with: 550, itmesToShow: 1 },
  { with: 768, itmesToShow: 2 },
  { with: 1200, itmesToShow: 3 },
];

const Elastic = () => {
  return (
       <Carousel breakPoints={breakPoints}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </Carousel> 
  );
}

export default Elastic