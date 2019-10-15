import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = () => {
    const [credentials, setCredentials] = useState(
      {
        username: '',
       password: ''
      })
    //state to post for axios token

    const login = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login')
        .then(res => {
            console.log('credentials axios', res.data.payload)
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/friends')
        })
        .catch(err => console.log('Login Error', err.response))
    }

    const handleChange = e => {
      setCredentials({...credentials, [e.target.name]: e.target.value})   
      }

    
    return (
        <div>
            <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
            </form>
        </div>
    )
}

export default Login
