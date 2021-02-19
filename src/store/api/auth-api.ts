import { IDecodedUser, IUser } from '../../types/user'
import axios from './axios.config'

export const authAPI = {
  login: async (name: string, password: string): Promise<IUser> => {
    const user = await axios.post<IUser>(
      'auth/login/',
      JSON.stringify({ name, password })
    )
    return user.data
  },
  logout: async (): Promise<void> => {
    await axios.put('logout/')
  },
  verifyUserToken: async (token: string): Promise<IDecodedUser> => {
    const sessionSuggestion = await axios.post<IDecodedUser>(
      'auth/verify/',
      JSON.stringify({ token })
    )
    return sessionSuggestion.data
  },
}
