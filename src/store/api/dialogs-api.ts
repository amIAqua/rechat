import axios from './axios.config'

export const dialogsAPI = {
  createDialog: async (
    currentUser_id: string,
    companionName: string
  ): Promise<any> => {
    const response = await axios.post(
      'dialogs/dialog_start',
      JSON.stringify({ currentUser_id, companionName })
    )
    return response.data
  },
}
