import { useHistory, useLocation } from 'react-router-dom'
import { dialogService } from '../store/services/dialogService'

export const useQueryString = () => {
  const history = useHistory()
  const location = useLocation()

  const setQueryStringParams = () => {
    history.push({
      pathname: location.pathname,
      search: `dialog_${dialogService.activeDialog?.dialogId}_${dialogService.activeDialog?.companion}`,
    })
  }

  return { setQueryStringParams }
}
