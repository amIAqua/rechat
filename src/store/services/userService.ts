import { action, computed, makeAutoObservable, observable, toJS } from 'mobx'
import { IUser, Dialog } from '../../types/user'
import { userAPI } from '../api/user-api'

class UserService {
  @observable _user: IUser | null = null
  @observable _userAvatarURL: string | null = null
  @observable _userDialogs: Dialog[] | [] = []

  constructor() {
    makeAutoObservable(this)
  }

  // field getters
  @computed
  get user() {
    return toJS(this._user)
  }

  @computed
  get userDialogs() {
    return toJS(this._userDialogs)
  }

  @computed
  get userAvatar() {
    return toJS(this._userAvatarURL)
  }

  @action
  setUser(user: IUser) {
    this._user = user
  }

  setUserAvatar(avatar: string) {
    this._userAvatarURL = avatar
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

  async uploadAvatar(avatar_url: string) {
    try {
      await userAPI.uploadAvatar(this.user!._id, avatar_url)
      this.getUserAvatar()
    } catch (error) {}
  }

  async getUserAvatar() {
    try {
      const avatar = await userAPI.getUserAvatar(this.user!._id)

      this.setUserAvatar(avatar)
    } catch (error) {}
  }
}

export const userService = new UserService()
