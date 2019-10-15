import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const NewFriends = () => {
    const [newFriends, setNewFriends] = useState({ id: Date.now(), name: '', age: '', email: '', })

    const handleChanges = e => {
        setNewFriends({ ...newFriends, [e.target.name]: e.target.value })
    }

    const newData = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends')
            .then(res => {
                console.log('New friend being added', res)

            })
            .catch(err => console.log('New Friend Error', err.response))
    }

    return (
        <div>
            <form onSubmit={newData}>
                <input
                    type='text'
                    name='name'
                    value={newFriends.name}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name= 'age'
                    value= {newFriends.age}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name= 'email'
                    value= {newFriends.email}
                    onChange={handleChanges}
                />
            </form>
        </div>
    )
}

export default NewFriends
