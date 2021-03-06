import React, { createContext, useContext, useMemo, useState } from 'react'
import styled from 'styled-components'
import UserCategoryRow from 'Pages/Admin/UserTable/UserCategoryRow/UserCategoryRow'
import UserRows from 'Pages/Admin/UserTable/UserRows/UserRows'
import { FilterInfoContext } from 'Pages/Admin/Admin'

export const EditContext = createContext({
  targetData: {},
  setTargetData: () => {},
})

export default function UserTable() {
  const [targetData, setTargetData] = useState({
    id: '',
    index: '',
  })
  const { filterInfo } = useContext(FilterInfoContext)
  const value = useMemo(
    () => ({
      targetData,
      setTargetData,
    }),
    [targetData, setTargetData]
  )

  const handleClickTable = ({ target: { parentNode, id, nodeName } }) => {
    if (nodeName === 'INPUT') return
    if (!parentNode.id) return

    const clickedRowData = filterInfo.find((data) => {
      return data.id === Number(parentNode.id)
    })

    setTargetData({
      id: clickedRowData.id,
      index: Number(id),
    })
  }

  return (
    <Table onClick={handleClickTable}>
      <UserCategoryRow />
      <EditContext.Provider value={value}>
        <UserRows />
      </EditContext.Provider>
    </Table>
  )
}

const Table = styled.table`
  background: white;
  z-index: 10;

  :hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.device.tablet} {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      margin-bottom: 1rem;
    }

    tr:nth-child(odd) {
      background: #e8e3f3;
    }

    tr:nth-child(even) {
      background: whitesmoke;
    }
  }
`
