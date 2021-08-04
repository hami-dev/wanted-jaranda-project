import GetDataFromLocalStorage from 'Utils/GetDataFromLocalStorage'

const Timer = () => {
  setInterval(() => {
    const loginAccount = GetDataFromLocalStorage('login') || []
    if (loginAccount) {
      const currentTime = new Date().getTime()
      if (currentTime > loginAccount.loginTime + 10 * 1000) {
        localStorage.removeItem('login')
      }
    }
  }, 1000 * 10)
}

export default Timer
