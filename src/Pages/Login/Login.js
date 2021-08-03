import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import GetDataFromLocalStorage from 'Utils/GetDataFromLocalStorage'
import SaveDataToLocalStorage from 'Utils/SaveDataToLocalStorage'
import LoginForm from 'Components/Form/LoginForm'

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default function Login() {
  const history = useHistory()
  const [input, setInput] = useState({})
  useEffect(() => {
    // 로그인 된 상태에서 로그인 페이지 접근할 시 main page로 redirect
    // const loginedAccount = GetDataFromLocalStorage('login')
    // if (loginedAccount) {
    //   alert('이미 로그인 되셨습니다.')
    //   history.push('/')
    // }
    // LocalStorage에 계정 정보 저장되어 있지 않으면 JSON fetch 후 저장
    const storedAccounts = GetDataFromLocalStorage('accounts')
    if (!storedAccounts) {
      try {
        fetch('http://localhost:3000/data/users.json')
          .then((response) => response.json())
          .then((response) => {
            SaveDataToLocalStorage('accounts', response)
            SaveDataToLocalStorage('admin', response[0])
          })
      } catch (error) {
        console.log(error)
      }
    }
  }, [history])

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleTryLogin = (e) => {
    e.preventDefault()

    // 로그인한 시점 저장을 위한 정보
    const date = new Date()
    const loginTimeObj = { loginTime: date.getTime() }

    // 우선 로그인 시도 계정이 admin 계정인지 판단
    const adminAccount = GetDataFromLocalStorage('admin') || []
    const isAdminAccount =
      adminAccount.email === input.email &&
      adminAccount.password === input.password

    // admin 계정이 로그인을 시도한 거라면
    // LocalStorage에 login된 계정 목록에 추가하고 admin page로 이동
    if (isAdminAccount) {
      const loginAdminAccount = Object.assign(adminAccount, loginTimeObj)
      SaveDataToLocalStorage('login', loginAdminAccount)
      history.push('/admin')
      return
    }

    // 로그인 시도 계정이 회원가입된 계정인지 판단
    const accounts = GetDataFromLocalStorage('accounts') || []
    const loginAccount = accounts.find(
      (account) =>
        account.email === input.email && account.password === input.password
    )
    // 현재 로그인 시도하는 계정이 회원가입된 정보라면
    // LocalStorage에 login된 계정 목록에 추가하고 main page로 이동
    if (loginAccount) {
      const loginCommonAccount = Object.assign(loginAccount, loginTimeObj)
      SaveDataToLocalStorage('login', loginCommonAccount)
      history.push('/')
    } else {
      alert('이메일 또는 비밀번호를 다시 확인해주세요.')
    }
  }

  const handleAdminLogin = () => {
    history.push('/admin-login')
  }

  return (
    <Root>
      <LoginForm
        type="login"
        handleInputChange={handleInputChange}
        handleTryLogin={handleTryLogin}
        handleAdminLogin={handleAdminLogin}
      />
    </Root>
  )
}
