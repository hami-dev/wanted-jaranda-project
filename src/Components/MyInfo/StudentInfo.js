import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import { userListStorage } from 'Utils/Storage'
import Toast from 'Components/Toast/Toast'
import Search from 'Pages/Admin/Search/Search'
import Pagination from 'Pages/Admin/Pagination/Pagination'
import useToast from 'Utils/Hooks/useToast'
import { toastMsg } from 'Constant'
const StudentInfo = () => {
  const [filterInfo, setFilterInfo] = useState([])
  const [pagingData, setPagingData] = useState({
    currentPage: 1,
    fullPage: 0,
  })
  const [usersInfo, setUsersInfo] = useState([])
  const { isShow, message, toast } = useToast()
  const searchRef = useRef()
  useEffect(() => {
    const studentList = userListStorage
      .load()
      .filter((user) => user.auth === 'student')
      .filter((user) => user.auth !== 'admin')
      .map((user, index) => (user = { ...user, pageIndex: index }))
    setUsersInfo(studentList)
    setPagingData({
      currentPage: 1,
      fullPage: Math.ceil(studentList.length / 5),
    })
    setFilterInfo(studentList.slice(0, 5))
  }, [])

  useEffect(() => {
    if (usersInfo.length < userListStorage.load().length) {
      setFilterInfo(
        usersInfo.slice(
          pagingData.currentPage * 5 - 5,
          pagingData.currentPage * 5
        )
      )
    }
    if (usersInfo.length === userListStorage.load().length) {
      setFilterInfo(
        usersInfo.slice(
          pagingData.currentPage * 5 - 5,
          pagingData.currentPage * 5
        )
      )
    }
  }, [pagingData.currentPage, usersInfo])

  const filterUserInfo = (selected) => {
    const userList = userListStorage.load()
    const inputValue = searchRef.current.value

    if (inputValue.length > 0 && selected === '선택') {
      const dataFilter = userList.filter(
        (item) =>
          item.email.indexOf(inputValue) !== -1 ||
          item.name.indexOf(inputValue) !== -1 ||
          item.age.indexOf(inputValue) !== -1
      )

      if (dataFilter.length === 0) {
        toast(toastMsg.NO_RESULT_SEARCH)
      }

      setUsersInfo(dataFilter)
      setFilterInfo(
        dataFilter.slice(
          pagingData.currentPage * 5 - 5,
          pagingData.currentPage * 5
        )
      )
      setPagingData({
        currentPage: 1,
        fullPage: Math.ceil(dataFilter.length / 5),
      })
    }

    if (inputValue.length > 0 && selected !== '선택') {
      let filtering = ''
      if (selected === '이메일') filtering = 'email'
      if (selected === '이름') filtering = 'name'
      if (selected === '나이') filtering = 'age'
      const dataFilter = userList.filter(
        (item) => item[filtering].indexOf(inputValue) !== -1
      )

      if (dataFilter.length === 0) {
        toast(toastMsg.NO_RESULT_SEARCH)
      }

      setUsersInfo(dataFilter)
      setFilterInfo(
        dataFilter.slice(
          pagingData.currentPage * 5 - 5,
          pagingData.currentPage * 5
        )
      )
      setPagingData({
        currentPage: 1,
        fullPage: Math.ceil(dataFilter.length / 5),
      })
    }
  }

  const refreshBtn = () => {
    const userList = userListStorage.load()
    setUsersInfo(userList)
    setPagingData({ currentPage: 1, fullPage: Math.ceil(userList.length / 5) })
    setFilterInfo(userList.slice(0, 5))
    toast(toastMsg.INIT_RESULT_SEARCH)
  }

  const changePageNum = (e) => {
    setPagingData({ ...pagingData, currentPage: Number(e.target.innerText) })
  }

  const arrowBtn = (e) => {
    let target = e.target.dataset.check
    if (e.target.localName === 'path') {
      target = e.target.parentNode.parentNode.dataset.check
    }

    if (target === 'prev') {
      setPagingData({
        ...pagingData,
        currentPage: pagingData.currentPage - 1,
      })
    }
    if (target === 'next') {
      setPagingData({
        ...pagingData,
        currentPage: pagingData.currentPage + 1,
      })
    }
  }
  return (
    <>
      <Search
        filterUserInfo={filterUserInfo}
        searchRef={searchRef}
        refreshBtn={refreshBtn}
        title="학생"
      />
      <Table>
        <thead>
          <tr>
            <Th></Th>
            <Th>이메일</Th>
            <Th>이름</Th>
            <Th>나이</Th>
            <Th>주소</Th>
          </tr>
        </thead>
        <tbody>
          {filterInfo.map((student, index) => {
            return (
              <tr key={index}>
                <Td>{student.pageIndex + 1}</Td>
                <Td>{student.email}</Td>
                <Td>{student.name}</Td>
                <Td>{student.age}</Td>
                <Td>{student.address.address}</Td>
              </tr>
            )
          })}
        </tbody>
        <Toast message={message} isShow={isShow} />
      </Table>
      <Pagination
        pagingData={pagingData}
        changePageNum={changePageNum}
        arrowBtn={arrowBtn}
      />
    </>
  )
}
const Table = styled.table`
  border-collapse: collapse;
`
const Th = styled.th`
  height: 50px;
  border: 1px solid #cbcbcb;
  background: #eaeaea;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  &:nth-child(1) {
    width: 50px;
  }
  &:nth-child(2) {
    min-width: 200px;
    max-width: 200px;
  }
  &:nth-child(3) {
    width: 100px;
  }
  &:nth-child(4) {
    width: 50px;
  }
  &:nth-child(5) {
    width: 450px;
  }
`
const Td = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50px;
  padding: 0.5rem 1.3rem;
  border: 1px solid #cbcbcb;
  text-align: center;
  line-height: 50px;
`
export default StudentInfo
