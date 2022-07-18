import React from 'react'
import { Container, Icon, Wrapper } from './style'

export const Input = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mt,
  mb,
  pl,
  pr,
  onChange,
  placeholder,
  defaultValue,
  value,
  name
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mt={mt} mb={mb}>
      <Icon>{children}</Icon>
      <Container
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pl={pl}
        pr={pr}
        type={type}
        onClick={onClick}
        height={height}
        width={width}
        name={name}
      ></Container>
    </Wrapper>
  );
}

export default Input