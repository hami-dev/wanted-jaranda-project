import React from 'react'
import styled from 'styled-components'
import Button from 'Components/Button/Button'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 450px;
`
const LoginContainer = styled.div`
  width: 100%;
  min-width: 320px;
  margin: 0 0 50px;
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
const CheckBoxLabel = styled.label`
  font-size: 12px;
`

const CheckBox = styled.input`
  position: relative;
  top: 2.5px;
  margin-right: 10px;
`
const Divider = styled.div`
  margin: 13px 0;
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

export default function LoginForm({
  type,
  handleInputChange,
  handleTryLogin,
  handleAdminLogin,
}) {
  return (
    <Container>
      <LoginContainer>
        <AccountTitle>LOGIN</AccountTitle>
        <form>
          <InputEmail
            type="text"
            placeholder="이메일 주소"
            name="email"
            onChange={(e) => handleInputChange(e)}
          ></InputEmail>
          <InputPassword
            type="password"
            placeholder="비밀번호"
            name="password"
            autoComplete="on"
            onChange={(e) => handleInputChange(e)}
          ></InputPassword>
          <RememberMeCheckBox>
            <CheckBoxLabel id="remember">
              <CheckBox type="checkbox" id="remember"></CheckBox>
              이메일 기억하기
            </CheckBoxLabel>
          </RememberMeCheckBox>
          <Button
            text="로그인"
            btnColor="#87bf44"
            txtColor="#fff"
            onClick={(e) => handleTryLogin(e)}
          />
          {type === 'login' && (
            <>
              <Divider></Divider>
              <Button text="회원가입" btnColor="#3e82f8" txtColor="#fff" />
              <AdminLogin onClick={() => handleAdminLogin()}>
                관리자 로그인
              </AdminLogin>
            </>
          )}
          <AdminLogin
            onClick={() => {
              localStorage.clear()
            }}
          >
            초기화
          </AdminLogin>
        </form>
      </LoginContainer>
    </Container>
  )
}