import GetDataFromLocalStorage from 'Utils/GetDataFromLocalStorage'
import SaveDataToLocalStorage from 'Utils/SaveDataToLocalStorage'

const PushDataToLocalStorage = (key, value) => {
  const data = GetDataFromLocalStorage(key) || []
  data.push(value)
  SaveDataToLocalStorage(key, data)
}
export default PushDataToLocalStorage
