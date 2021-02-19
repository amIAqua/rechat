import { useHistory } from 'react-router-dom'

export const useRedirect = (): { redirectTo: Function } => {
  const history = useHistory()

  const redirectTo = (path: string, time: number) => {
    return setTimeout(() => {
      history.push(path)
    }, time)
  }

  return { redirectTo }
}
