import { FC } from 'react'
import { observer } from 'mobx-react'
import { userService } from '../../store/services/userService'
import { DialogCard } from './DialogCard/DialogCard'
import { Dialog } from '../../types/user'

export const DialogsList: FC = observer(() => {
  if (!userService.userDialogs) return null

  return (
    <div className='dialogs-list'>
      {(userService.userDialogs as Dialog[]).map((dialog: Dialog) => {
        return <DialogCard key={dialog.companion} dialog={dialog} />
      })}
    </div>
  )
})
