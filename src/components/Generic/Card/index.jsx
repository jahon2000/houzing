
import React ,{useState} from "react";
import noimg from "../../../assets/images/noimg.png";
import nouser from "../../../assets/images/ellipse2.png";

import {
  Container,
  Image,
  InfoWrapper,
  Info,
  Icons,
  Price,
  User,
  Itms,
} from "./style";

export const Card = ({data}) => {
  const [selected, setSelected] = useState(false);
  return (
    <Itms>
      <Container>
        <Image src={data?.attachments[0]?.imgPath || noimg} alt="house image" />
        <InfoWrapper>
          <User>
            <User.Img src={data?.user || nouser} />
          </User>
          <Info.Title>
            {data?.description || "description"} Category:{data?.category?.name}
          </Info.Title>
          <Info.Text>
            {data?.name || "house"}, {data?.address || "Address"},{" "}
            {data?.city || "City"} {data?.country || "Country"}
          </Info.Text>
          <Info.Detailes>
            <Icons.Wrapper>
              <Icons.Bed />
              <Info.Text>{data?.houseDetails?.bed || 0} Beds</Info.Text>
            </Icons.Wrapper>
            <Icons.Wrapper>
              <Icons.Bath />
              <Info.Text>{data?.houseDetails?.bath || 0} Baths</Info.Text>
            </Icons.Wrapper>
            <Icons.Wrapper>
              <Icons.Garage />
              <Info.Text>{data?.houseDetails?.garage || 0} Garages</Info.Text>
            </Icons.Wrapper>
            <Icons.Wrapper>
              <Icons.Ruler />
              <Info.Text>{data?.houseDetails?.area || 0} Sq Ft</Info.Text>
            </Icons.Wrapper>
          </Info.Detailes>
        </InfoWrapper>
        <Price>
          <Price.Wrapper>
            <Price.Sale>{data?.salePrice || 0} / month</Price.Sale>
            <Price.Origin>{data?.price || 0} / month</Price.Origin>
          </Price.Wrapper>
          <Price.IconWrapper>
            <Icons.Resize />
            <Icons.Love
              onClick={() => setSelected(!selected)}
              selected={selected}
            />
          </Price.IconWrapper>
        </Price>
      </Container>
    </Itms>
  );
};
export default Card;
