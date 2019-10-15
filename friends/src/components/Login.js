import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = () => {
    const [credentials, setCredentials] = useState({})
    //state to post for axios token

    const login = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login')
        .then(res => {
            console.log('credentials axios', res)
            localStorage.setItem('token', res)
            this.props.history.push('/')
        })
        .catch(err => console.log('Login Error', err.response))
    }

    const handleChange = e => {
        setCredentials: {
         ...credentials,
         [e.target.name]; e.target.value
        }
    }
    
    return (
        <div>
            <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
            </form>
        </div>
    )
}

export default Login
