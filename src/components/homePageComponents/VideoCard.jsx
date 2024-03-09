import React from 'react'

export default function VideoCard({videoItem}) {
  return (
    <div>
        <div className='cursor-pointer hover:scale-105 transition-all duration-200'>
            <img src={videoItem.images} alt="image" className='rounded-t-lg' />
            <div className='p-2 bg-white h-40 rounded-b-lg'>
            <h2 className='font-bold text-[13px] line-clamp-1'>{videoItem.title}</h2>
            <h3 className='mt-2 text-gray-600 line-clamp-3'>{videoItem.description}</h3>
            <div className='flex gap-3 mt-4'>
                {videoItem.tags.map((tag,i)=>{
                    return(
                        <div  key={i}>
                            <h5 className='bg-blue-500 text-[13px] px-2 pb-1 pt-1 cursor-pointer rounded-sm text-white'>
                                #{tag}
                            </h5>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    </div>
  )
}
