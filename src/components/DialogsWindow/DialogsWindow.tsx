import { FC } from 'react'
import { UserCard } from '../UserCard/UserCard'
import { DialogsList } from '../DialogsList/DialogsList'
import { Button } from '@material-ui/core'
import { authService } from '../../store/services/authenticationService'

export const DialogsWindow: FC = () => {
  const logoutHandler = () => {
    authService.logout()
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
