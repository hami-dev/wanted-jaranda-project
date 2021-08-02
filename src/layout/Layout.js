import React from 'react'
import styled from 'styled-components/macro'

import Header from 'Layout/Header'
import Footer from 'Layout/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  )
}

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 6.3rem;
  background-color: #fff;
`
