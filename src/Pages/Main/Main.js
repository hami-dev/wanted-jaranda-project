import React, { useEffect } from 'react'

export default function Main() {
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem('loggedUser')
    }, 10000)

    // console.log(new Date(data.expired))
  }, [])
  return <div></div>
}
