import { action, computed, makeObservable, observable } from 'mobx'
import { auth } from '../firebaseConnection'
import admin from 'firebase-admin'
import Cookies from 'js-cookie'

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
  async verifyCurrentUser() {
    const token = this.getUserTokenFromCookie()

    if (token) this.decodeUserToken(token)
  }

  @action
  async decodeUserToken(token: string) {
    const decodedToken = await admin.auth().verifyIdToken(token)
    console.log(decodedToken.uid)
  }

  @action
  async login(email: string, password: string) {
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      throw new Error(error)
    }

    const token = await this.getCurrentUserToken()

    if (token) {
      this.setUserToken(token)
    }
  }

  @action
  async getCurrentUserToken() {
    const user = await auth.currentUser?.getIdTokenResult()

    if (user) return user.token
  }

  @action
  setUserToken(token: string) {
    Cookies.set('idtoken', token)
  }

  @action
  async logout() {
    try {
      console.log('logout')

      await auth.signOut()
    } catch (error) {
      throw new Error(error)
    }

    this.removeAuthenticationStatus()
  }
}

export const authService = new authenticationService()
