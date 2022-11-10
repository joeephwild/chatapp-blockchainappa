import { useEffect, useState, useContext } from 'react'
import { Filter, Friend } from '../components/Index'
import { ChatAppContext } from '../context/ChatAppContext'

export default function Home() {
  const {  } = useContext(ChatAppContext)
  return (
    <div >
        <Filter />
        <Friend />  
    </div>
  )
}
