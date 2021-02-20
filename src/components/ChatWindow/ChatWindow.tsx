import { FC, useEffect } from 'react'
import { observer } from 'mobx-react'
import { dialogService } from '../../store/services/dialogService'
import { useQueryString } from '../../utils/useQueryString'

export const ChatWindow: FC = observer(() => {
  const { setQueryStringParams } = useQueryString()

  useEffect(() => {
    if (dialogService.activeDialog) {
      setQueryStringParams()
    }
  }, [dialogService.activeDialog])
  return (
    <>
      <div className='chat-window'>
        {dialogService.activeDialog ? (
          <h3>{dialogService.activeDialog.companion}</h3>
        ) : null}
      </div>
    </>
  )
})
