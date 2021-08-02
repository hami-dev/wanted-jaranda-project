import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ className, children, clickHandler }) {
  return (
    <Wrapper className={className} onClick={clickHandler}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.2rem;
  border-radius: 0.6rem;
  color: #fff;
  background-color: #87bf44;
`
