import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//INTERNAL IMPORTS
import { ChatAppContext } from '../context/ChatAppContext'

const Navbar = () => {
  const { } = useContext(ChatAppContext)
  return (
    <div>Navbar</div>
  )
}

export default Navbar