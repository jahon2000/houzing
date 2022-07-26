import React , {useRef} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from "../Card";
import {Icon} from './style'

const responsive = {
  0: { items: 1 },
  550: { items: 2 },
  1024: { items: 3 },
};

const items = [<Card />, <Card />, <Card />];

const AliseCarousel = () => {
    const slider  = useRef()
    return (
      <div style={{width:'100%' , display:'flex'}}>
        <Icon.Left onClick={() => slider.current?.prev()} />
        <Icon.Right onClick={() => slider.current?.next()} />
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          ref={slider}
        />
      </div>
    );
}
export default AliseCarousel;