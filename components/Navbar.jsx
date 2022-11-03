import React, { useEffect, useState, useContext } from 'react'
import logo from '../public/assets/fonts/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
//INTERNAL IMPORTS
import { ChatAppContext } from '../context/ChatAppContext'
import { Error, Model } from '../components/Index'
import images from '../public/assets/fonts/images'

//Styles
const style = {
  wrapper: 'flex items-center px-4 relative py-2.5 h-16 font-Poppins justify-between w-full',
  leftNav: 'flex items-center space-x-3',
  rightNav: ' flex items-center space-x-6',
  rightMenu: 'flex items-center hidden md:inline-flex space-x-6 text-sm font-bold',
  btn: 'bg-white text-black px-4 py-2 rounded-full',
  btn2: "flex items-center space-x-2 bg-white text-black px-3 py-1.5 rounded-full",
  activeBtn: 'bg-[#f18303] text-[#000000de] px-4 py-2.5 mx-auto ',
  mobileMenu: 'w-screen h-screen absolute top-0 left-0 bg-white text-black z-50',
  mobilelinks: 'justify-center text-2xl mt-[20%] items-center flex flex-col'
}

const Navbar = () => {
  const menuItems = [
    {
      menu: "All Users",
      links: "all users"
    },
    {
      menu: "Chat",
      links: "/"
    },
    {
      menu: "Contact",
      links: "/"
    },
    {
      menu: "Settings",
      links: "/"
    },
    {
      menu: "Faq",
      links: "/"
    }
  ]
  const { account, userName, connectWallet } = useContext(ChatAppContext)
  //state
const [active, setActive] = useState(2);
const [open, setOpen] = useState(false);
const [openModel, setOpenModel] = useState()
  return (
    <div className={style.wrapper}>
      
        <div className={style.leftNav}>
             <Image src={images.avatar} alt='logo' width={50} height={50} />
             <span className='text-lg font-bold hidden md:block pt-3'>Alienz</span>
        </div>
        <div className={style.rightNav}>
          <div className={style.rightMenu}>
            {menuItems.map((el, i) => (
              <div onClick={() => setActive(i + 1)} key={i + 1} className={`${style.links} ${active == i + 1 ? style.activeBtn : ''}`}>
                <Link className={style.menuLink} href={el.links}>{el.menu}</Link>
              </div>
            ))}
          </div>
         
          {open && (
            <div className={style.mobileMenu}>
            {menuItems.map((el, i) => (
              <div onClick={() => setActive(i + 1)} key={i + 1} className={`${style.mobilelinks} ${active == i + 1 ? style.activeBtn : ''}`}>
                <Link className={style.menuLink} href={el.links}>{el.menu}</Link>
              </div>
              
            ))}
            <p className={style.mobilebtn}>
              <Image src={images.close}  alt='close' width={50} height={50} onClick={() => setOpen(false)} />
            </p>
          </div>
          )}

         {account == "" ? (
         <button onClick={() => connectWallet()} className={style.btn}>Connect Wallet</button>
         ) : (
          <button onClick={() => setOpenModel(true)} className={style.btn2}>
            {''}
            <Image src={userName ? images.accountName : images.create2} alt="account image" height={20} width={20} />
            <small>{userName || "create account"}</small>
          </button>
         )}
        </div>
     <div className={style.right}
     onClick={() => setOpen(true)} >
      <Image src={images.open} height={30} width={30} />
     </div>
     {/* open model  */}
     {openModel && (
      <div>
        <Model openModel={setOpenModel}
        title="Welcome to"
        head="chst body"
        info='lorem' />
      </div>
     )}
    </div>
  )
}

export default Navbar