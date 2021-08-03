import GetDataFromLocalStorage from 'Utils/GetDataFromLocalStorage'

const IsLogin = () => {
  return !!GetDataFromLocalStorage('login')
}

export default IsLogin
