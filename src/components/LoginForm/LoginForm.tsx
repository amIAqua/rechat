import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { authService } from '../../store/services/authenticationService'

export const LoginForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    authService.login(email, password)
  }

  return (
    <>
      <h3>Auth</h3>
      <form onSubmit={submitHandler}>
        <input
          name='email'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        ></input>
        <input
          name='password'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        ></input>
        <button type='submit'>Submit</button>
      </form>
      <NavLink to='/'>Main</NavLink>
    </>
  )
}
