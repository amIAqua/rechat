import { makeAutoObservable, observable, action, computed, toJS } from 'mobx'
import { Dialog } from '../../types/user'

class DialogService {
  @observable _activeDialog: Dialog | null = null

  constructor() {
    makeAutoObservable(this)
  }

  // field getters
  @computed
  get activeDialog() {
    return this._activeDialog
  }

  @action
  setActiveDialog(activeDialog: any) {
    this._activeDialog = activeDialog
    console.log(toJS(this._activeDialog))
  }
}

export const dialogService = new DialogService()
