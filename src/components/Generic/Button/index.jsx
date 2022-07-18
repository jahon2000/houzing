import React, {memo} from 'react'
import { Container } from './style'

export const Button = ({
    children,
    onClick,
    height,
    width,
    type,
    mr,
    ml,
    mb,
    mt
}) => {
  return (
      <Container
          mr={mr}
          ml={ml}
          mt={mt}
          mb={mb}
          type={type}
          height={height}
          width={width}
          onClick={onClick}
      >
          {children}
    </Container>
  )
}
export default memo(Button)