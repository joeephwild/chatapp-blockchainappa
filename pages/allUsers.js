import React, {useState, useEffect, useContext} from 'react'
import { UserCard } from '../components/Index'
import { ChatAppContext} from '../context/ChatAppContext'

const style = {}

const allUsers = () => {
    const { userLists, addFriends} = useContext(ChatAppContext)
  return (
    <div>
        <div className='text-3xl lg:text-5xl font-bold text-center'>Find Your Friends</div>
        <div>
            {userLists.map((el, i) => (
                <UserCard key={i + 1} el={el} functionName={addFriends} />
            ))}
        </div>
    </div>
  )
}

export default allUsers