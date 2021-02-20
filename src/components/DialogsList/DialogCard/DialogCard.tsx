import { FC } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { dialogService } from '../../../store/services/dialogService'

type DialogCardPropsType = {
  dialog: {
    companion: string
    messages: [string]
  }
}

export const DialogCard: FC<DialogCardPropsType> = ({ dialog }) => {
  return (
    <>
      <div
        className='dialog-card'
        onClick={() => dialogService.setActiveDialog(dialog)}
      >
        <div className='dialog-info'>
          <img
            className='avatar-companion'
            src='https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'
          />
          <div className='companion'>
            <h4>{dialog.companion}</h4>
            <small>Hi! How are you? :)</small>
          </div>
          <div className='time-unread'>
            <small style={{ marginBottom: '1rem' }}>12.45 AM</small>
          </div>
        </div>
      </div>
    </>
  )
}
