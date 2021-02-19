import { FC } from 'react'
import { observer } from 'mobx-react'
import { Redirect, Route } from 'react-router-dom'
import { authService } from '../../store/services/authenticationService'

interface ProtectedRouteProps {
  component: FC
  path: string
}

export const ProtectedRoute: FC<ProtectedRouteProps> = observer(
  ({ component, path }) => {
    return (
      <>
        {authService.isAuthenticated ? (
          <Route component={component} path={path} exact={true} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )}
      </>
    )
  }
)
