import { FC, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

// layouts
import { AuthLayout } from './layouts/AuthLayout/AuthLayout'
import { ChatLayout } from './layouts/ChatLayout/ChatLayout'
import { authService } from './store/services/authenticationService'
import { ProtectedRoute } from './utils/ProtectedRoute/ProtectedRoute'

export const App: FC = () => {
  useEffect(() => {
    authService.verifyCurrentUser()
  }, [])

  return (
    <>
      <Switch>
        <Route path={'/login'} component={AuthLayout} />
        <ProtectedRoute path={'/'} component={ChatLayout} />
      </Switch>
    </>
  )
}
