import { FC } from 'react'
import {
  ProtectedRouteProps,
  checkRoutingProtection,
} from './checkRoutingProtection'

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  component,
  path,
}) => {
  return <>{checkRoutingProtection(component, path)}</>
}
