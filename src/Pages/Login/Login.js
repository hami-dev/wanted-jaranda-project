import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from 'Components/Button/Button'

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 450px;
`
const LoginContainer = styled.div`
  width: 100%;
  min-width: 320px;
  margin: 48px 0;
  padding: 0 15px;
`

const AccountTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 48px;
`

const Input = styled.input`
  margin-bottom: 8px;
  outline-color: #87bf44;
  padding-left: 24px;
  border-radius: 2px;
  border: solid 1px #cccccc;
  background-color: #ffffff;
  line-height: 52px;
  width: 100%;
`
const InputEmail = styled(Input)``
const InputPassword = styled(Input)``

const RememberMeCheckBox = styled.div`
  width: 100%;
  margin-top: 6px;
  margin-bottom: 20px;
`

const CheckBox = styled.input`
  margin-right: 10px;
`
const Divider = styled.div`
  margin: 24px 0;
  background-color: #e5e5e5;
  height: 1px;
`

const AdminLogin = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
  margin-top: 30px;
`

export default function Login() {
  return (
    <Root>
      <Container>
        <LoginContainer>
          <AccountTitle>LOGIN</AccountTitle>
          <InputEmail type="text" placeholder="이메일 주소"></InputEmail>
          <InputPassword
            type="password"
            placeholder="비밀번호"
            autoComplete="on"
          ></InputPassword>
          <RememberMeCheckBox>
            <label>
              <CheckBox type="checkbox"></CheckBox>
              아이디 기억하기
            </label>
          </RememberMeCheckBox>
          <Button text="로그인" btnColor="#87bf44" txtColor="#fff" />
          <Divider></Divider>
          <Button text="회원가입" btnColor="#3e82f8" txtColor="#fff" />
          <AdminLogin>관리자 로그인</AdminLogin>
        </LoginContainer>
      </Container>
    </Root>
  )
}
