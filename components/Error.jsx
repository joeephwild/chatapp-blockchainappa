import React from 'react'

const Error = ({ errors }) => {
  return (
    <div className="fixed top-[30%] left-[40%] right-[35%] bottom-[30%] z-[111] m-auto bg-white h-20 text-red-600 text-lg text-center px-7 py-3.5 rounded-lg ">
      <div>
        <h1>{errors}</h1>
        
      </div>
    </div>
  )
}

export default Error