import { action, computed, makeObservable, observable } from 'mobx'
import { IUser } from '../../types/user'

class UserService {
  @observable _user: IUser | {} = {}

  constructor() {
    makeObservable(this)
  }

  // field getters
  @computed
  get user() {
    return this._user
  }

  @action
  setUser(user: IUser) {
    this._user = user
  }
}

export const userService = new UserService()
