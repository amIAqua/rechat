import { FC } from 'react'
import { observer } from 'mobx-react'
import { userService } from '../../store/services/userService'
import { DialogCard } from './DialogCard/DialogCard'

export const DialogsList: FC = observer(() => {
  console.log(userService.userDialogs)

  return (
    <>
      {/* {userService.userDialogs.map((dialog: any) => {
        return <DialogCard key={dialog} />
      })} */}
    </>
  )
})
