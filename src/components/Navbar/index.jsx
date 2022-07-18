import React from 'react'
import { navbar } from '../../utils/navbar'
import { Outlet ,useNavigate} from 'react-router-dom'
import { Container, Link, Logo, NavbarBody, NavbarWrapper, Wrapper } from './style'
import { Button } from '../Generic/Button'


export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
    <Container>
        <NavbarWrapper>
          <Logo onClick={()=>navigate('/home')}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path, hidden }) => {
              return (
                !hidden && (
                  <Link key={id} to={path} >{title}</Link>
                )
              )
            })}
          </NavbarBody>
          {localStorage.getItem('token') ? (
            <>
              <h1 onClick={() => navigate('/myproperties')}>Profile</h1>
              <button onClick={() => {
                localStorage.clear();
                navigate('/home')
              }}
              width={'120px'}
              >Log Out</button>
            </>
          ) : (
              <Button onClick={()=>navigate('/singin')} width={'120px'}>Login</Button>
          )}
     </NavbarWrapper>
      </Container>
      <Outlet/> 
    </Wrapper>
  )
}
export default Navbar