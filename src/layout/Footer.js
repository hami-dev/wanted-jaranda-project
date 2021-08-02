import React from 'react'
import styled from 'styled-components/macro'

import footerBgUrl from 'Assets/Images/bg-footer.png'

export default function Footer(props) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <TeamInfoWrap>
            <Title>Team RE4CT</Title>
          </TeamInfoWrap>
          <CustomerServiceWrap>
            <Title>고객센터/기업제휴</Title>
            <DefinitionList>
              <DefinitionTitle>운영시간</DefinitionTitle>
              <DefinitionDesc>평일 10:00~19:00</DefinitionDesc>
            </DefinitionList>
            <DefinitionList>
              <DefinitionTitle>카톡</DefinitionTitle>
              <DefinitionDesc>카카오톡 친구 자란다</DefinitionDesc>
            </DefinitionList>
            <DefinitionList>
              <DefinitionTitle>전화</DefinitionTitle>
              <DefinitionDesc>1577 4013</DefinitionDesc>
            </DefinitionList>
            <DefinitionList>
              <DefinitionTitle>메일</DefinitionTitle>
              <DefinitionDesc>contact@jaranda.kr</DefinitionDesc>
            </DefinitionList>
            <DefinitionList>
              <DefinitionTitle>블로그</DefinitionTitle>
              <DefinitionDesc>blog.naver.com/jaranda</DefinitionDesc>
            </DefinitionList>
          </CustomerServiceWrap>
        </Content>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;
  height: 49.3rem;
  padding-top: 24.1rem;
`
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #87bf44;
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 15rem;
    background: center top / 1440px 100% no-repeat url(${footerBgUrl});
    transform: translateY(-14.9rem);
  }
  @media screen and (min-width: 1440px) {
    &::before {
      background-size: 100% 100%;
    }
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 96rem;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 1.4rem;
`
const TeamInfoWrap = styled.div`
  width: 50%;
`
const Title = styled.span`
  display: block;
  margin-bottom: 1.2rem;
  font-size: 1.6rem;
  line-height: 1.8;
`

const CustomerServiceWrap = styled.div`
  width: 33%;
`
const DefinitionList = styled.dl`
  display: flex;
  font-size: 1.4rem;
  line-height: 1.5;
`
const DefinitionTitle = styled.dt`
  position: relative;
  margin-right: 1.4rem;
  font-weight: 400;
  &::before {
    content: '';
    position: absolute;
    right: -0.7rem;
    width: 0.1rem;
    height: 60%;
    background-color: #fff;
    transform: translateY(35%);
  }
`
const DefinitionDesc = styled.dd`
  font-weight: 300;
`
