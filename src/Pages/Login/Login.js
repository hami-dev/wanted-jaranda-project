import React, { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Layout from 'Layout/Layout'
import CustomInput from 'Components/Form/CustomInput'
import CustomCheckBox from 'Components/Form/CustomCheckBox'
import Button from 'Components/Form/Button'
import backgroundImgUrl from 'Assets/Images/background.sign_in.png'

export default function Login(props) {
  const [isRememberId, setIsRememberId] = useState(false)

  const idInputRef = useRef(null)
  const pwInputRef = useRef(null)
  const rememberRef = useRef(null)

  const handleRememberMe = useCallback(
    ({ target: { checked } }) => {
      checked ? setIsRememberId(true) : setIsRememberId(false)
    },
    [isRememberId]
  )

  const handleLogin = useCallback(() => {
    console.log('로그인')
  }, [])

  const handleSignup = useCallback(() => {
    console.log('회원가입')
  }, [])

  return (
    <Layout>
      <StyledSection>
        <Container>
          <LoginContent>
            <StyledTitle>부모님 로그인</StyledTitle>
            <StyledInput ref={idInputRef} type="text" placeholder="이메일" />
            <StyledInput
              ref={pwInputRef}
              type="password"
              placeholder="비밀번호"
            />
            <StyledCustomCheckBox
              ref={rememberRef}
              cehcekd={isRememberId}
              id="rememberId"
              checkHandler={handleRememberMe}
            >
              아이디 기억하기
            </StyledCustomCheckBox>
            <LoginButton clickHandler={handleLogin}>로그인</LoginButton>
            <SingupButton clickHandler={handleSignup}>
              부모님 회원가입
            </SingupButton>
            <StyledLink to="/">비밀번호를 잊으셨나요?</StyledLink>
          </LoginContent>
        </Container>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  position: relative;
  padding: 19.2rem 0 12.8rem;
  z-index: 100;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    height: 37.7rem;
    background: url(${backgroundImgUrl}) no-repeat top right;
    transform: translateY(-7rem);
    z-index: -1;
  }
`

const Container = styled.div`
  max-width: 86.4rem;
  margin: 0 auto;
  border-top-right-radius: 6rem;
  padding: 4.8rem 0;
  background-color: #fff;
`

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 45rem;
  margin: 0 auto;
`

const StyledTitle = styled.h2`
  margin-bottom: 4.8rem;
  font-size: 2.4rem;
  text-align: center;
`

const StyledInput = styled(CustomInput)`
  margin-bottom: 1.6rem;
`

const StyledCustomCheckBox = styled(CustomCheckBox)`
  align-self: flex-start;
  margin-bottom: 2rem;
`

const LoginButton = styled(Button)`
  position: relative;
  margin-bottom: 4.8rem;
  &::before {
    content: '';
    position: absolute;
    bottom: -2.4rem;
    display: block;
    width: 100%;
    height: 0.1rem;
    background-color: #e5e5e5;
  }
`
const SingupButton = styled(Button)`
  margin-bottom: 3.8rem;
  background-color: #0085fd;
`

const StyledLink = styled(Link)`
  padding: 1rem;
  font-size: 1.2rem;
`
