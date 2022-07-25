import { Carousel } from "antd";
import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/carousel.svg";
import img1 from "../../assets/images/uycha.jpg";
import img2 from "../../assets/images/uy.jpg";

const CarouselWrapper = styled("div")`
  position:relative ;
`;

const MainCarousel = styled(Carousel)`
  height: fit-content;
`;
const Img = styled.img.attrs({
  src: img1,
})`
  background-repeat: no-repeat;
  background-color: black;
  background-size: cover;
  background-position: center;
  height: 571px;
  @media (max-width: 550px) {
    height: 100vh;
    position: relative;
  }
`;
const Img1 = styled.img.attrs({
  src: img2,
})`
  background: black;
  background-color: black;
  background-image: linear-gradient(black, black, black, black);
  height: 571px;
  @media (max-width: 550px) {
    height: 100vh;
    position: relative;
  }
`;

const Icon = styled.div`
  @media (max-width: 550px) {
    display: none;
  }
`;

Icon.Left = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, -50%) rotate(180deg);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
Icon.Right = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(-100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
`;

export { CarouselWrapper, MainCarousel, Icon, Img, Img1 };
