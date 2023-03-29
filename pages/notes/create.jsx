import Image from 'next/image'
import React from 'react'


const CreateNotes = () => {
  return (
    <div className="w-[80%] m-auto mt-[30px] mb-[50px] border-[1px]">
    <Image src="https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" width={500} height={500} alt=""></Image>
   </div>
  )
}

export default CreateNotes