import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friends = () => {
    const [friends, setFriends] = useState([])

    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
        console.log('Friends data', res.data)
        setFriends({...friends, res})
    })

    return (
        <div>{friends.map(friend => {
            <div key={friend.id}>
               <h3>{friend.name}</h3> 
               <span>{friend.age}</span>
               <button>I Hate You!</button>
            </div>
        })}
            
        </div>
    )
}

export default Friends
