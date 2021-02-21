import { action, computed, makeAutoObservable, observable } from 'mobx'
import Cookies from 'js-cookie'
import { authAPI } from '../api/auth-api'
import { userService } from './userService'
import { IDecodedUser } from '../../types/user'

class authenticationService {
  @observable _isUserAuthenticated: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  // field getters
  @computed
  get isAuthenticated() {
    return this._isUserAuthenticated
  }

  // actions
  @action
  setAuthenticationStatus() {
    this._isUserAuthenticated = true
  }

  @action
  removeAuthenticationStatus() {
    this._isUserAuthenticated = false
  }

  @action
  getUserTokenFromCookie() {
    return Cookies.get('idtoken')
  }

  @action
  setUserToken(token: string) {
    Cookies.set('idtoken', token)
  }

  removeUserToken() {
    Cookies.remove('idtoken')
  }

  @action
  async verifyCurrentUser() {
    try {
      const token = this.getUserTokenFromCookie()

      if (token) {
        const sessionSuggestion: IDecodedUser = await authAPI.verifyUserToken(
          token
        )

        if (!sessionSuggestion) {
          this.removeUserToken()
          this.removeAuthenticationStatus()
        }

        userService.setUser(sessionSuggestion.user)
        this.setAuthenticationStatus()
        userService.getUserAvatar()
      }
    } catch (error) {
      console.log(error)
    }
  }

  @action
  async login(email: string, password: string) {
    try {
      const user = await authAPI.login(email, password)

      if (!user || !user.token) {
        return
      }

      console.log(user)

      userService.setUser(user)
      this.setUserToken(user.token)
      userService.getUserAvatar()
    } catch (error) {
      throw new Error(error)
    }

    this.setAuthenticationStatus()
  }

  @action
  logout() {
    try {
      this.removeUserToken()
    } catch (error) {
      throw new Error(error)
    }

    this.removeAuthenticationStatus()
  }
}

export const authService = new authenticationService()
