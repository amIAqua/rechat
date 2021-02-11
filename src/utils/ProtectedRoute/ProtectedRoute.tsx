import { FC } from 'react'
import {
  ProtectedRouteProps,
  checkRoutingProtection,
} from './checkRoutingProtection'

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component, path }) => {
  return <>{checkRoutingProtection(component, path)}</>
}

export default ProtectedRoute
