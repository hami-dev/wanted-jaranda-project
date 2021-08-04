export const saveDataToLocalStorage = (key, user = {}) => {
  let expiredTime = new Date()

  expiredTime.setHours(expiredTime.getHours() + 4)

  localStorage.setItem(key, JSON.stringify(user))
}

export const getDataFromLocalStorage = (key) => {
  JSON.parse(localStorage.getItem(key))
}
