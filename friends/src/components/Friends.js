import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friends = () => {
    const [friends, setFriends] = useState([])

    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
        console.log('Friends data', res)
        setFriends({})
    })

    return (
        <div>
            
        </div>
    )
}

export default Friends
