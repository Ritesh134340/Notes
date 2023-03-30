import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
        <div className='border-[1px] h-[70px] shadow-lg flex items-center box-border justify-between '>
            <div className='flex items-center'>
           <Link href="/" className="cursor-pointer">
           <p className='ml-[30px] mr-[150px] font-bold text-[23px] select-none cursor-pointer'>MyNotes</p> 
           </Link> 
           <div>
            <ul className=' flex items-center justify-evenly gap-[28px] cursor-pointer select-none'>
              
               <Link href="/" className="cursor-pointer"><li>Home</li></Link>
               <Link href="/notes/create" className="cursor-pointer"><li>Create</li></Link> 
             
            </ul>
         </div>
            </div>
        

         <div className='flex mr-[50px] items-center justify-between  gap-3 '>
            <div className="flex items-center gap-[8px]">
            <div className="rounded-full w-[35px] h-[35px]  bg-red-100 border-[2px] border-black-300 ">
            </div>
            <p>Ritesh Kumar</p>
            </div>
          
            <div className="border-[1px] ml-[70px] bg-[rgb(100,103,241)] rounded-[8px] text-white py-[5px] px-[18px]">
            <Link href="/login" className="text-sm font-bold">Login</Link>
           </div>
         </div>
         
        </div>
  )
}

export default Navbar