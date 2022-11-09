import React from 'react'
import Image from 'next/image' 
import images from '../public/assets/fonts/images'

const UserCard = ({ el, i, functionName}) => {
  return (
    <div>
      <Image src={images[`image${i +  1}`]} alt="profile" widthj={100} height={100} />
      <div>
      <h3>{el.name}</h3>
      <div>{el.accountAddress.slice(0,25)}...</div>
      <button onClick={() => functionName({
        name: el.name,
        accountAddress: el.accountAddress
      })}>Follow</button>
      </div>
      <small>{i + 1}</small>
      
    </div>
  )
}

export default UserCard