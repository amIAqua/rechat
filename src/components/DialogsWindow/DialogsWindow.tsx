import { FC, useEffect } from 'react'
import { UserCard } from '../UserCard/UserCard'
import { DialogsList } from '../DialogsList/DialogsList'
import { Button } from '@material-ui/core'
import { authService } from '../../store/services/authenticationService'
import { useHistory } from 'react-router-dom'
import { userService } from '../../store/services/userService'

export const DialogsWindow: FC = () => {
  const history = useHistory()

  useEffect(() => {
    userService.getUserDialogs(userService.user?._id!)
  }, [])

  const logoutHandler = () => {
    authService.logout()

    history.push('/login')
  }

  return (
    <>
      <Button onClick={logoutHandler}>Logout</Button>
      <div className='dialogs-window'>
        <UserCard />
        <h3>Dialogs</h3>
        <DialogsList />
      </div>
    </>
  )
}
