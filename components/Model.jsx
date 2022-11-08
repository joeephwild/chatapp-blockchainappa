import React, { useState, useContext } from 'react'
import { ChatAppContext } from '../context/ChatAppContext'
import images from '../public/assets/fonts/images'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { Loader } from '../components/Index'

const Model = ({ openBox, head, address, image, functionName, }) => {
  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const { loading } = useContext(ChatAppContext);
  return (
    <div className='fixed top-0 left-0 z-[100] h-full w-full bg-black/50'>
      {
        loading == true ? (
          <Loader />
        ) : (
          <div className='my-[10%] mx-auto w-[500px] bg-white text-[#333]'>
          <div className='p-[50px]'>
          <span onClick={() => openBox(false)} className='pl-[90%] cursor-pointer text-black'>
          <AiOutlineClose size={25} />
          </span>
              <h3 className="text-2xl font-bold">Create Account</h3>
              <form>
                  <div className='my-5'>
                      <label htmlFor='text' className='block uppercase'>Username</label>
                      <input
                      onChange={(e) => setName(e.target.value)}
                       type="text"
                      placeholder="Enter your name..."
                      className='w-full border-2 border-[#333] outline-none rounded-[5px] h-[50px] p-[5px]' />
                  </div>
                  <div className='my-5'>
                      <label htmlFor='text' className='block uppercase'>Address</label>
                      <input
                      onChange={(e) => setAccountAddress(e.target.value)}
                       type="text"
                      placeholder={address || "Enter address..."}
                      className='w-full border-2 border-[#333] outline-none rounded-[5px] h-[50px] p-[5px]' />
                  </div>
                  <button type='submit' onClick={() => functionName({name, accountAddress})} className='bg-black text-lg flex text-white w-full px-6 py-3.5 items-center justify-center  mt-[30px]'>
                    {''}
                    <Image src={image} alt='send' width={30} height={30} />
                    Create
                    </button>
              </form>
          </div>
      </div>
        )
      }
    
</div>
  )
}

export default Model