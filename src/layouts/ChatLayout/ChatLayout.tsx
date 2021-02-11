import { FC } from 'react'
import { Container, Grid } from '@material-ui/core'

// components
import DialogsWindow from '../../components/DialogsWindow/DialogsWindow'
import ChatWindow from '../../components/ChatWindow/ChatWindow'

const ChatLayout: FC = () => {
  return (
    <>
      <Container maxWidth='lg' className='chat-layout-container'>
        <Grid container spacing={1}>
          <Grid container item xs={4} spacing={1}>
            <DialogsWindow />
          </Grid>
          <Grid container item xs={8} spacing={1}>
            <ChatWindow />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ChatLayout
