import { Carousel } from "antd";
import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/carousel.svg";
import img1 from "../../assets/images/uycha.jpg";
import img2 from "../../assets/images/uy.jpg";

const CarouselWrapper = styled("div")`
  position: relative;
  justify-content: center;
  align-items: center;
`;

const MainCarousel = styled(Carousel)`
  height: fit-content;
`;
const Img = styled.img.attrs({
  src: img1,
})`
  filter: brightness(20%);
  height: 571px;
  @media (max-width: 550px) {
    height: 100vh;
    position: relative;
  }
`;
const Img1 = styled.img.attrs({
  src: img2,
})`
  filter: brightness(20%);
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



export { CarouselWrapper, MainCarousel, Icon, Img, Img1 };
