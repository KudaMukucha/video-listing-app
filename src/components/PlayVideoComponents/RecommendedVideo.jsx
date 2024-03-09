import React from 'react'
import VideoGridList from '../homePageComponents/VideoGridList'

export default function RecommendedVideo() {
  return (
    <div>
        <VideoGridList isRecommended={true}/>
    </div>
  )
}
