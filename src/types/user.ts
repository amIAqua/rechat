export type Dialog = {
  dialogId: string
  companion: string
  messages: [string]
}

export interface IUser {
  token: string
  name: string
  dialogs: Dialog[]
  _id: string
}

export interface IDecodedUser {
  user: {
    name: string
    password: string
    token: string
    dialogs: Dialog[]
    _id: string
  }
  exp: number
  iat: number
}
