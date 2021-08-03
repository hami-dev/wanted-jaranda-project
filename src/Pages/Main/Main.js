import React from 'react'
import { useHistory } from 'react-router'
import GetDataFromLocalStorage from 'Utils/GetDataFromLocalStorage'
import SaveDataToLocalStorage from 'Utils/SaveDataToLocalStorage'

export default function Main() {
  const history = useHistory()
  const handleTabClick = (tabRoute) => {
    // 로그인 상태 확인
    // 로그인 X -> 로그인 페이지로
    const loginState = GetDataFromLocalStorage('login')
    if (!loginState) {
      history.push('/login')
      return
    }
    // 로그인 O -> 해당 Tab 방문 가능 여부 파악
    // 방문 가능 시 방문
    if (loginState.access.includes(tabRoute)) {
      history.push(tabRoute)
      return
    }
    // 방문 불가능 시 반려
    if (tabRoute === '/teacher') {
      // alert('선생님만 이용할 수 있습니다.')
    } else {
      // alert('부모님만 이용할 수 있습니다.')
    }
  }

  return (
    <>
      <div
        onClick={() => {
          localStorage.clear()
        }}
      >
        초기화
      </div>
      <div
        onClick={() => {
          history.push('/login')
        }}
      >
        로그인
      </div>
      <div
        onClick={() => {
          history.push('/admin-login')
        }}
      >
        관계자 로그인
      </div>
      <div
        onClick={() => {
          SaveDataToLocalStorage('login', null)
          alert('로그아웃 되셨습니다.')
          history.push('/')
        }}
      >
        로그아웃
      </div>
      <div
        onClick={() => {
          // handleTabClick('/teacher')
          history.push('/teacher')
        }}
      >
        선생님 전용 메뉴
      </div>
      <div
        onClick={() => {
          history.push('/parent')

          // handleTabClick('/parent')
        }}
      >
        부모님 전용 메뉴
      </div>
    </>
  )
}
