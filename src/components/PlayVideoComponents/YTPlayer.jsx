import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function YTPlayer({videoItem}) {
    const videoUrl = "https://www.youtube.com/embed/"+videoItem?.url+"?start=0&autoplay=1&origin=http://localhost:5173"
  return (
    <div>
        <p className='font-bold text-[26px]'>{videoItem.title}</p>
        <div className='flex gap-3 mt-2'>
            {
                videoItem?.tags?.map((tag,i)=>{
                    return(
                       <div key={i}>
                            <h4 className='text-[11px] bg-blue-500 text-white px-2 pb-1 pt-1 rounded-sm'>#{tag}</h4>
                        </div>
                    )
                })
            }
        </div>
       <div className='mt-4'>
       <iframe id='ytplayer' type='text/html' width={'100%'} height={360} src={videoUrl}>

      </iframe>
       </div>
       <div className='bg-white p-4 mt-4 rounded-md'>
        <h2 className='font-bold text-[20px] mb-2'>About this video</h2>
        <ReactMarkdown>{videoItem?.description}</ReactMarkdown>
       </div>
    </div>
  )
}
