import React, {useState,useEffect} from 'react'
import { Body, Container, Wrapper } from './style'
import Card from '../Generic/Card'
const Proporties = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('')
    })

  return (
    <Container>
      <Wrapper>
        <div className='title center'>
          <h1>Properties</h1>
        </div>
        <div className="description center">
          You have been dreaming of and looking for the cosy and affordable
          homes.
        </div>
          </Wrapper>
          <Body>
              <Card/>
          </Body>
    </Container>
  );
}

export default Proporties