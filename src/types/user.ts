type Dialog = {
  companion: string
  message: string
}

export interface IUser {
  email: string
  name: string
  surname: string
  dialogs: Dialog[]
}
