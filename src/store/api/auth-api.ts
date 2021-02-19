import axios from './axios.config'

export const authAPI = {
  login: async (name: string, password: string): Promise<string> => {
    const token = await axios.post<string>(
      'auth/login/',
      JSON.stringify({ name, password })
    )
    return token.data
  },
  logout: async (): Promise<void> => {
    await axios.put('logout/')
  },
  verifyUserToken: async (token: string): Promise<boolean> => {
    const sessionSuggestion = await axios.post<boolean>(
      'auth/verify/',
      JSON.stringify({ token })
    )
    return sessionSuggestion.data
  },
}
