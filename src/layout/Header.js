import React from 'react'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'
import LogoImgUrl from 'Assets/Images/logo.png'

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <StyledLogo to="/">
          <h1 className="a11y">Jaranda</h1>
          <LogoImg src={LogoImgUrl} alt="logo" />
        </StyledLogo>
        <StyledNav>
          <NavList>
            <NavItem>
              <StyledLink to="/">자란다선생님 보기</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/">선생님 지원하기</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/">로그인/회원가입</StyledLink>
            </NavItem>
          </NavList>
        </StyledNav>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6.3rem; // Temp
  background-color: #fff;
  z-index: 300;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 96rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`
const StyledLogo = styled(Link)`
  display: block;
  width: 10.2rem;
  height: 3.9rem;
`
const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledNav = styled.nav`
  height: 100%;
`
const NavList = styled.ul`
  display: flex;
  height: 100%;
`
const NavItem = styled.li`
  height: 100%;
  padding: 0 1.5rem;
  &:last-child {
    font-weight: 600;
    color: #87bf44;
  }
  &:hover {
    font-weight: 600;
    color: #87bf44;
  }
`
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
`
