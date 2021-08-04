import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from './useForm'
import validate from './validate'
import styled from 'styled-components'
import { saveDataToLocalStorage, getDataFromLocalStorage } from './utils'

const API = 'http://localhost:3000/data/users.json'

export default function Login() {
  const history = useHistory()
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => saveDataToLocalStorage('userDatas', res))
  }, [])

  const users = JSON.parse(localStorage.getItem('userDatas'))
  const userEmail = users.map((user) => user.email)
  const userPassword = users.map((user) => user.password)

  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      if (userEmail.includes(values.email)) {
        if (userPassword.includes(values.password)) {
          let expiredTime = new Date()
          expiredTime.setMinutes(expiredTime.getMinutes() + 1)
          const loggedUser = users.filter((user) => user.email === values.email)
          const addTimeToUser = {
            logUser: loggedUser,
            expired: expiredTime,
          }
          saveDataToLocalStorage('loggedUser', addTimeToUser)
          history.push('/')
        } else {
          alert('비밀번호가 잘못되었습니다.')
        }
      } else {
        alert('이메일이 잘못되었습니다.')
      }
    },
    validate,
  })

  // const data = JSON.parse(localStorage.getItem('loggedUser'))
  // console.log(new Date(data.expired))

  return (
    <LoginWrap>
      <LoginLayout>
        <form onSubmit={handleSubmit}>
          <LoginTitle>Login</LoginTitle>
          <InputEmail
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          ></InputEmail>
          <InputEmail
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          ></InputEmail>
          <SubmitButton type="submit" disabled={submitting}>
            로그인
          </SubmitButton>
        </form>
      </LoginLayout>
    </LoginWrap>
  )
}

const LoginWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const LoginLayout = styled.div`
  width: 30rem;
  height: 29rem;
  margin: 3rem 0;
  padding: 0 1rem;
  text-align: center;
`
const LoginTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`

const InputEmail = styled.input`
  width: 100%;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  cursor: text;
  margin-bottom: 1rem;
  placeholder {
    color: palevioletred;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  background-color: #87bf44;
  color: #eee;
  border-radius: 5px;
  font-size: 1rem;
  padding: 1rem;
`
