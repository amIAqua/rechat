import { FC, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { ProtectedRoute } from './utils/ProtectedRoute/ProtectedRoute'

// layouts
import { AuthLayout } from './layouts/AuthLayout/AuthLayout'
import { ChatLayout } from './layouts/ChatLayout/ChatLayout'
import { authService } from './store/services/authenticationService'
import { useRedirect } from './utils/useRedirect'
import { userService } from './store/services/userService'

export const App: FC = () => {
  const { redirectTo } = useRedirect()

  useEffect(() => {
    authService.verifyCurrentUser()
  }, [userService.user])

  return (
    <>
      <Switch>
        <Route path={'/login'} component={AuthLayout} exact={true} />
        <ProtectedRoute path={'/'} component={ChatLayout} />
      </Switch>
    </>
  )
}
