import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const NewFriends = (props) => {
    const [newFriends, setNewFriends] = useState({
            name: '',
            age: '',
            email: ''
        }
    )

    const handleChanges = e => {
        setNewFriends({ ...newFriends, [e.target.name]: e.target.value })
    }

    const newData = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', newFriends)
            .then(res => {
                console.log('New friend being added', res.data)
                props.setFriends(res.data)
            })
            .catch(err => console.log('New Friend Error', err.response))
    }

    return (
        <div>
            <form onSubmit={newData}>
                <input
                    type='text'
                    name='name'
                    placeholder= 'Name'
                    value={newFriends.name}
                    onChange={handleChanges}
                />
                <input
                    type='number'
                    name='age'
                    placeholder='Age'
                    value={newFriends.age}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='email'
                    placeholder= 'Email'
                    value={newFriends.email}
                    onChange={handleChanges}
                />
                <button type='submit'>Be My Friend</button>
            </form>
        </div>
    )
}

export default NewFriends
