import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export default function SearchSection() {
  const searchButtonstags =[
    {
      id:1,
      tag:'React'
    },
    {
      id:2,
      tag:'Angular'
    },
    {
      id:3,
      tag:'Tailwind CSS'
    },
    {
      id:4,
      tag:'Chat GPT'
    },
    
  ]
  return (
    <div className='flex px-10 flex-col text-center items-center'>
       <h2 className='font-extrabold text-transparent text-6xl bg-gradient-to-tr from-pink-600 to-blue-900 bg-clip-text uppercase mt-3'>Videos</h2>
       <div className='flex mt-2 bg-white w-[300px] rounded-md items-center px-3 py-1'>
          <input type="text" className='px-3 py-1 w-[95%] p-1 outline-none '/>
          <HiMagnifyingGlass/>
       </div>
       <h3 className='mt-3 text-[14px] text-gray-500'>challenging multi-step experiences  with quizzes and progress-tracking.</h3>
       <div className='flex gap-4 mt-4'>
        {
          searchButtonstags.map((item)=>{
            return(
              <div className='bg-white text-[14px] rounded-md px-2 pb-1 cursor-pointer p-1 hover:scale-110 transition-all duration-300 hover:font-semibold hover:bg-red-500 hover:text-white'>
                {item.tag}
              </div>
            )
          })
        }
       </div>
    </div>
  )
}
