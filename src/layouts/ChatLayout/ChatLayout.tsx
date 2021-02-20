import { FC } from 'react'

// components
import { DialogsWindow } from '../../components/DialogsWindow/DialogsWindow'
import { ChatWindow } from '../../components/ChatWindow/ChatWindow'

export const ChatLayout: FC = () => {
  return (
    <>
      <div className='chat-layout-container' style={{ marginTop: '3rem' }}>
        <DialogsWindow />
        <ChatWindow />
      </div>
    </>
  )
}
