import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold p-4 m-4 text-3xl'>Contact US</h1>
      <form action="">
        <input type="text" placeholder='name' className='border border-black p-2 m-2'/>
        <input type="text" placeholder='message' className='border border-black p-2 m-2' />
        <button className='border border-black p-2 m-2 bg-gray-100 rounded-lg '>Submit</button>
      </form>
    </div>
  )
}

export default Contact
