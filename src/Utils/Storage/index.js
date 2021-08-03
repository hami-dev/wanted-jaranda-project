import Storage from 'Utils/Storage/Generator'
import { storageTitle } from 'Constant'

export const userListStorage = new Storage(storageTitle.USER_LIST.name)
export const currentAccountStorage = new Storage(
  storageTitle.CURRENT_ACCOUNT.name
)
