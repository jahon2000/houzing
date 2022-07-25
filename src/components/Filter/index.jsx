import React from "react";
import {
  BtnWrap,
  Container,
  ContentWrapperr,
  Fragment,
  Icons,
  Title,
  
} from "./style";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Popover } from "antd";
export const Filter = () => {
 
  const content = (
    <ContentWrapperr>
      <Title>Address</Title>
      <Fragment>
        <Input width={"200px"} height={"44px"} placeholder={"Country"} />
        <Input width={"200px"} height={"44px"} placeholder={"Region"} />
        <Input width={"200px"} height={"44px"} placeholder={"City"} />
        <Input width={"200px"} height={"44px"} placeholder={"Zip Code"} />
      </Fragment>
      <Title>Apartment info </Title>
      <Fragment>
        <div style={{ display: "flex", gap: "20px" }}>
          <Input width={"200px"} height={"44px"} placeholder={"Rooms"} />
          <Input width={"200px"} height={"44px"} placeholder={"Size"} />
          <Input width={"200px"} height={"44px"} placeholder={"Sort"} />
        </div>
      </Fragment>
      <Title>Price</Title>
      <Fragment gapmas>
        <div style={{ display: "flex", gap: "20px" }}>
          <Input width={"200px"} height={"44px"} placeholder={"Min Price"} />
          <Input width={"200px"} height={"44px"} placeholder={"Max Price"} />
        </div>
      </Fragment>
      <div
        style={{
          display: "flex",
          gap: "20px",
          aliginItems: "flex-end",
          marginLeft: "auto",
        }}
      >
        <Button  type={"four"} width={"130px"}>
          Cancel
        </Button>
        <Button type={"five"} width={"130px"}>
          Submit
        </Button>
      </div>
    </ContentWrapperr>
  );
  return (
    <div className="center">
      <Container>

        <Input
          pl={"50px"}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
          >
          <Icons.SearchIcon />
        </Input>
        
        
          <BtnWrap>
        <Popover placement="bottomRight" content={content} trigger="click">
          <Button type={"secondary"} width={"131px"}>
            <Icons.SearchAdvensed />
            Advanced
          </Button>
        </Popover>
        <Button type={"primary"} width={"131px"}>
          <Icons.SearchLoop />
          Search
        </Button>
          </BtnWrap>
          
      </Container>
    </div>
  );
};
export default Filter;
