import GetDataFromLocalStorage from 'Utils/GetDataFromLocalStorage'

const Timer = () => {
  setInterval(() => {
    const loginAccount = GetDataFromLocalStorage('login') || []
    if (loginAccount) {
      const currentTime = new Date().getTime()
      if (currentTime > loginAccount.loginTime) {
        localStorage.removeItem('login')
      }
    }
  }, 1000 * 100)
}

export default Timer
