import { FC } from 'react'
import { Redirect, Route } from 'react-router-dom'

export type ProtectedRouteProps = {
  component: FC
  path: string
}

export const checkRoutingProtection = (
  // TODO: delete auth props after creating global authentication state
  auth: boolean,
  component: FC,
  path: string
) =>
  auth ? (
    <Route component={component} path={path} exact />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  )
