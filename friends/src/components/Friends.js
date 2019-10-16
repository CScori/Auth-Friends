import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import NewFriends from './NewFriends'

const Friends = () => {
    const [friends, setFriends] = useState([])

    const getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log('Friends data', res.data);
                setFriends({ ...friends, res.data })
            })
            .catch(err => { console.log('friends err', err.response) })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>{friends.map(friend => {
            return (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>{friend.age} <br /> Make another friend at: {friend.email}</p>
                    <button>I Hate You!(delete)</button>
                </div>
            )
        })}
            <NewFriends />
        </div>
    )
}

export default Friends
