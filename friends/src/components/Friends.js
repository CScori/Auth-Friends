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
                setFriends(res.data)
            })
            .catch(err => { console.log('friends err', err.response) })
    }

    useEffect(() => {
        getData()
    }, [])

    const remove = (id) => {
        axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then(res => {
            console.log('Delete id', res)
            setFriends(res.data)
        })
        .catch(err => console.log('delete', err))
    }
   
    return (
        <div>{friends.map(friend => {
            return (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>{friend.age} <br /> Make friends with: {friend.email}</p>
                    <button>Let's Get Closer</button>
                    <button onClick={() => remove(friend.id)}>I Hate You!(delete)</button>
                </div>
            )
        })}
        
            <NewFriends setFriends={setFriends}/>
        </div>
    )
}

export default Friends
