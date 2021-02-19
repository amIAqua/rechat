import { FC } from 'react'
import { UserCard } from '../UserCard/UserCard'
import { DialogsList } from '../DialogsList/DialogsList'
import { Button } from '@material-ui/core'
import { authService } from '../../store/services/authenticationService'
import { useHistory } from 'react-router-dom'

export const DialogsWindow: FC = () => {
  const history = useHistory()

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
