import { computed, makeObservable, observable } from 'mobx'

class authService {
  readonly _isAuthenticated: boolean = true

  constructor() {
    makeObservable(this, {
      _isAuthenticated: observable,
      isAuthenticated: computed,
    })
  }

  // field getters
  get isAuthenticated() {
    return this._isAuthenticated
  }
}

export default new authService()
