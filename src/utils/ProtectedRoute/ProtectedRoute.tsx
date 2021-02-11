import { FC, useState } from 'react'
import {
  ProtectedRouteProps,
  checkRoutingProtection,
} from './checkRoutingProtection'

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component, path }) => {
  const [auth, setAuth] = useState(false)

  return <>{checkRoutingProtection(auth, component, path)}</>
}

export default ProtectedRoute
