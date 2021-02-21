import { makeAutoObservable, observable, action, computed, toJS } from 'mobx'
import { Dialog } from '../../types/user'
import { dialogsAPI } from '../api/dialogs-api'
import { userService } from './userService'

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

  async createDialog(companionName: string) {
    try {
      const currentUser_id = userService.user?._id
      const dialogData = await dialogsAPI.createDialog(
        currentUser_id!,
        companionName
      )
    } catch (error) {}
  }
}

export const dialogService = new DialogService()
