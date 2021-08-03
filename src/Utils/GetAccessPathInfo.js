import GetDataFromLocalStorage from 'Utils/GetDataFromLocalStorage'

const GetAccessPathInfo = () => {
  const data = GetDataFromLocalStorage('login') || null
  if (data) {
    return data.access
  }
}
export default GetAccessPathInfo
