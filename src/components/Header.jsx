import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <>
     <div className='flex items-center justify-between p-3 bg-white'>
     <div className='flex gap-7 items-center'>
            <img src={'/logo.png'} alt="app-logo" className='w-[40px] rounded-full' />
            <ul className='flex gap-4'>
                <Link to={'/'} className='cursor-pointer hover:bg-red-500 px-3 py-1 pb-2 rounded-sm hover:text-white'>Home</Link>
                <li className='cursor-pointer hover:bg-red-500 px-3 py-1 pb-2 rounded-sm hover:text-white'>Courses</li>
                <li className='cursor-pointer hover:bg-red-500 px-3 py-1 pb-2 rounded-sm hover:text-white'>Videos</li>
            </ul>
        </div>
        <div>
        <img src="/logo1.png" alt="app-logo" className='w-10 h-10'/>
        </div>
     </div>
   </>
  )
}
