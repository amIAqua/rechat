import axios from './axios.config'
import { Dialog } from '../../types/user'

export const userAPI = {
  getUserDialogs: async (_id: string): Promise<Dialog[]> => {
    const userDialogs = await axios.get<Dialog[]>(`users/${_id}/dialogs`)
    return userDialogs.data
  },
}
