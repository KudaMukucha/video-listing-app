import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RecommendedVideo from '../components/PlayVideoComponents/RecommendedVideo'
import YTPlayer from '../components/PlayVideoComponents/YTPlayer'
import GlobalApi from '../Services/GlobalApi'

export default function PlayVideo() {
    const {id} = useParams()
    const [videoItem,setVideoItem] = useState([])
    
    useEffect(()=>{
        getVideoDetailById()
    },[])

    const getVideoDetailById = async()=>{
        try {
            const response = await GlobalApi.getVideoById(parseInt(id));
            const result = {
              id: response.data.id,
              title: response.data.title,
              description: response.data.description,
              tags:response.data.tags,
              url: response.data.url
            };
            // console.log(result)
             setVideoItem(result);
          } catch (error) {
            console.error(error);
          }
    }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 p-10'>
      <YTPlayer videoItem={videoItem}/>
      <RecommendedVideo/>
    </div>
  )
}
