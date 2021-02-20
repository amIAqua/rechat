import { action, computed, makeAutoObservable, observable, toJS } from 'mobx'
import { IUser, Dialog } from '../../types/user'
import { userAPI } from '../api/user-api'

class UserService {
  @observable _user: IUser | null = null
  @observable _userDialogs: Dialog[] | [] = []

  constructor() {
    makeAutoObservable(this)
  }

  // field getters
  @computed
  get user() {
    return this._user
  }

  @computed
  get userDialogs() {
    return toJS(this._userDialogs)
  }

  @action
  setUser(user: IUser) {
    this._user = user
  }

  @action
  setUserDialogs(userDialogs: Dialog[]) {
    this._userDialogs = userDialogs
  }

  @action
  async getUserDialogs(_id: string) {
    try {
      const userDialogs = await userAPI.getUserDialogs(_id)

      this.setUserDialogs(userDialogs)
    } catch (error) {}
  }
}

export const userService = new UserService()
