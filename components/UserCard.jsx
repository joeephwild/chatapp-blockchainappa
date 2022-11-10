import React from 'react'
import Image from 'next/image' 
import images from '../public/assets/fonts/images'

const style = {
  UserCard : 'mx-auto font-Popppins relative mt-8',
  UserCardBox: 'bg-gray-800  rounded-lg  text-center p-[1rem] ',
  UserCardImg: 'rounded-full overflow-hidden items-center',
  UserCardBoxInfo: 'leading-7 space-y-5',
  button: 'bg-[#f18303] rounded-lg w-[50%] p-2.5 border-none text-sm ',
  number: 'absolute right-4 rounded-full top-2 bg-[#f18303] px-1.5 py-1 cursor-pointer',
  text: 'text-gray-400 text-sm'
}


const UserCard = ({ el, i, functionName}) => {
  return (
    <div className={style.UserCard}>
    <div className={style.UserCardBox}>
      <Image
        className={style.UserCardImg}
        src={images.image1}
        alt="user"
        width={100}
        height={100}
      />

      <div className={style.UserCardBoxInfo}>
        <h3>{el.name}</h3>
        <p className={style.text}>{el.accountAddress.slice(0, 14)}...{el.accountAddress.slice(20, 28)}</p>
        <button
        className={style.button}
          onClick={() =>
            functionName({ name: el.name, accountAddress: el.accountAddress })
          }
        >
          Add Friend
        </button>
      </div>
    </div>

    <small className={style.number}>{i + 1}</small>
  </div>
  )
}

export default UserCard