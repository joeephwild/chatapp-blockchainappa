import React from 'react'
import images from '../public/assets/fonts/images'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className=''>
      <div>
        <Image src={images.loader} alt='loader' width={100} height={100} />
      </div>
    </div>
  )
}

export default Loader