import { action, computed, makeObservable, observable } from 'mobx'
import Cookies from 'js-cookie'
import { authAPI } from '../api/auth-api'

class authenticationService {
  @observable _isUserAuthenticated: boolean = false

  constructor() {
    makeObservable(this)
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
  setUserWithTokenToken(token: string) {
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
        const sessionSuggestion = await authAPI.verifyUserToken(token)
        console.log(sessionSuggestion)

        if (!sessionSuggestion) {
          this.removeUserToken()
          this.removeAuthenticationStatus()
        }

        this.setAuthenticationStatus()
      }
    } catch (error) {
      console.log(error)
    }
  }

  @action
  async login(email: string, password: string) {
    try {
      const token = await authAPI.login(email, password)

      this.setUserWithTokenToken(token)
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
