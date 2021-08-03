import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import PasswordPolicy from 'Components/PasswordPolicy/PasswordPolicy'
import Address from 'Components/Address/Address'
// import Button from 'Components/Button/Button'
import { useInput } from 'Utils/useInput'

export default function Signup() {
  const [pass, , onChangePass] = useInput('')
  const [passConfirm, , onChangePassConfirm] = useInput('')
  const [passPolicy, setPassPolicy] = useState({
    numeric: false,
    special: false,
    alphabet: false,
    eight: false,
  })

  //비밀번호와 비밀번호확인이 일치하지 않을 때
  const CheckPassWord = () => {
    if (pass !== passConfirm) {
      console.log('비밀번호가 일치하지 않습니다')
    }
  }

  const CheckPasswordPolicy = (password) => {
    console.log('password policy: ', password)

    const numeric = /[0-9]/g
    const alphabet = /[a-z]/gi
    const special = /[~!@#$%^&*()_+|<>?:{}]/g

    const currentPassword = {}

    if (numeric.test(password)) {
      console.log('숫자')
      currentPassword.numeric = true
    }
    if (special.test(password)) {
      console.log('특수문자')
      currentPassword.special = true
      console.log(passPolicy)
    }
    if (alphabet.test(password)) {
      currentPassword.alphabet = true
      console.log('영문')
    }
    if (password.length >= 8) {
      currentPassword.eight = true
      console.log('8자리 이상')
    }

    setPassPolicy(currentPassword)
  }

  return (
    <FormSection>
      <FormTitle>
        <div>간편하게 회원가입하고</div>
        <div>선생님 정보를 받아보세요</div>
      </FormTitle>
      <form action="">
        <ul>
          <li>
            <Input type="text" placeholder="이메일" />
          </li>
          <li>
            <Input
              type="password"
              placeholder="비밀번호"
              value={pass}
              onChange={onChangePass}
              onBlur={(e) => CheckPasswordPolicy(e.target.value)}
            />
            <PasswordPolicy value={pass} passPolicy={passPolicy} />
            <Input
              type="password"
              placeholder="비밀번호 확인"
              onBlur={CheckPassWord}
              value={passConfirm}
              onChange={onChangePassConfirm}
            />
          </li>
          <li>
            <Input type="text" placeholder="이름" />
          </li>
          <li>
            <Input type="text" placeholder="나이" />
          </li>
          <li>
            {/* <InputTitle>주소</InputTitle> */}
            <Address />
          </li>
          <li>
            <InputTitle>결제 정보</InputTitle>
            <FlexDiv>
              <Input type="text" placeholder="카드 번호" disabled />
              <SmallButton>카드 입력하기</SmallButton>
            </FlexDiv>
          </li>
          <li>
            <InputTitle>학부모님 이신가요?</InputTitle>
            <Radio type="radio" name="role" id="radio_parent" />
            <Label htmlFor="radio_parent">학부모님</Label>
            <Radio type="radio" name="role" id="radio_teacher" />
            <Label htmlFor="radio_teacher">선생님</Label>
          </li>
          <LongButton>가입하기</LongButton>
        </ul>
      </form>
    </FormSection>
  )
}

const FormSection = styled.div`
  width: 45rem;
  margin: 0 auto;
`

const FormTitle = styled.div`
  font-size: 2.4rem;
  margin: 10rem 0 3rem;
`

const InputTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 1rem 0;
`

export const FlexDiv = styled.div`
  display: flex;
`

export const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  border: 1px solid rgba(154, 154, 154, 0.5);
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  :hover {
    color: #0085fd;
    border: solid 1px #0085fd;
    background-color: rgba(0, 133, 253, 0.1);
  }
`

const Radio = styled.input`
  /* height: 1rem; */
`

const Label = styled.label`
  margin: 0 4rem 0 0.8rem;
`

const Button1 = styled.button`
  height: 4.5rem;
  background-color: #0085fd;
  color: white;
`

const LongButton = styled(Button1)`
  width: 100%;
  margin: 3rem 0;
`

export const SmallButton = styled(Button1)`
  width: 30rem;
  margin-left: 1rem;
`
