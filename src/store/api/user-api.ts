import axios from './axios.config'
import { Dialog } from '../../types/user'

export const userAPI = {
  getUserDialogs: async (_id: string): Promise<Dialog[]> => {
    const userDialogs = await axios.get<Dialog[]>(`users/${_id}/dialogs`)
    return userDialogs.data
  },
  uploadAvatar: async (_id: string, avatar_url: string): Promise<void> => {
    await axios.post(`users/${_id}/setAvatar`, JSON.stringify({ avatar_url }))
  },
  getUserAvatar: async (_id: string): Promise<string> => {
    const avatar = await axios.get(`users/${_id}/avatar`)
    return avatar.data
  },
}
