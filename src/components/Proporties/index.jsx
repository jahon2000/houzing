import React, { useState, useEffect } from "react";
import { Body, Container, Wrapper } from "./style";
import Card from "../Generic/Card";
const { REACT_APP_BASE_URL: url } = process.env;

const Proporties = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading]=useState(true)
  useEffect(() => {
    fetch(`${url}/v1/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res));
    setLoading(false)
  }, []);
  if (loading) {
    return <h1>Loading</h1>
  }

  console.log(data.data , "data");
  return (
    <Container>
      <Wrapper>
        <div className="title center">
          <h1>Properties</h1>
        </div>
        <div className="description center">
          You have been dreaming of and looking for the cosy and affordable
          homes.
        </div>
      </Wrapper>
      <Body>
        {
          data?.data?.map((value) => {
            return <Card key={value.id} data={value} />
          })
      }
      </Body>
    </Container>
  );
};

export default Proporties;
