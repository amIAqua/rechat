import { FC } from 'react'
import { Route, Switch } from 'react-router-dom'

// layouts
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import ChatLayout from './layouts/ChatLayout/ChatLayout'
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute'

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route path={'/login'} component={AuthLayout} />
        <ProtectedRoute path={'/'} component={ChatLayout} />
      </Switch>
    </>
  )
}

export default App
