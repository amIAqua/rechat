import { FC } from 'react'
import { Redirect, Route } from 'react-router-dom'
import authService from '../../store/services/authService'

export type ProtectedRouteProps = {
  component: FC
  path: string
}

export const checkRoutingProtection = (component: FC, path: string) =>
  authService.isAuthenticated ? (
    <Route component={component} path={path} exact />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  )
