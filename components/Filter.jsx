import React, { useState, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import images from "../public/assets/fonts/images";
import { ChatAppContext } from "../context/ChatAppContext";
import Model from "./Model";


const style = {
  filter: 'w-[80%] mt-9 m-auto',
  filterBox: 'md:flex flex-col space-y-5 md:justify-between items-center',
  filterBoxLeft: 'flex items-center gap-4 rounded-lg px-2 bg-gray-800',
  input: 'bg-transparent outline-none border-none p-4 width-[18rem]',
  filterBoxRight: 'flex gap-4',
  button: 'bg-[#f18303] flex items-center space-x-3 mx-auto rounded-lg text-sm px-5 py-3.6 text-sm',
  fiterModel: 'fixed inset-0 bg-[#292f3f] z-[2222222]'
}

const Filter = () => {
  const { account, addFriends } = useContext(ChatAppContext);

  //USESTATE
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className={style.filter}>
    <div className={style.filterBox}>
      <div>
        <div className={style.filterBoxLeft}>
          <Image src={images.search} alt="image" width={20} height={20} />
          <input className={style.input} type="text" placeholder="search.." />
        </div>
      </div>
      <div className={style.filterBoxRight}>
        <button className={style.button}>
          <Image src={images.clear} alt="clear" width={20} height={20} />
          CLEAR CHAT
        </button>
        <button className={style.button} onClick={() => setAddFriend(true)}>
          <Image src={images.user} alt="clear" width={20} height={20} />
          ADD FRIEND
        </button>
      </div>
    </div>

    {/* //MODEL COMPONENT */}
    {addFriend && (
      <div className={style.fiterModel}>
        <Model
          openBox={setAddFriend}
          button="Add Friend"
          image={images.buddy}
           smallInfo='Make More Friends'
          functionName={addFriends}
        />
      </div>
    )}
  </div>
  )
}

export default Filter