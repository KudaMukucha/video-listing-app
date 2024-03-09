import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalApi from "../../Services/GlobalApi";
import VideoCard from "./VideoCard";

export default function VideoGridList({isRecommended=false}) {
  const [videoList, setVideoList] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await GlobalApi.getAllVideosList();
        const result = response.data.data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          images: item.images.thumbnail,
          tags:item.tags
        }));

        // console.log(result);
        setVideoList(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);


  return (
    <div className="mt-2 md:mt-4">
      <h4 className="px-4 md:px-8 lg:px-12 font-semibold">Recommended Videos</h4>
      {
        !isRecommended ? ( <div className="mt-4 px-4 md:px-8 lg:px-12  grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {videoList.map((item) => (
         <div onClick={()=> navigate('play-video/' + item.id)} key={item.id}> 
           <VideoCard  videoItem={item} />
          </div>
        ))}
      </div>)
      :
      (
        <div className="mt-4 px-4 md:px-8 lg:px-12  grid grid-cols-2 gap-6">
        {videoList.map((item) => (
         <div onClick={()=> navigate('play-video/' + item.id)} key={item.id}> 
           <VideoCard  videoItem={item} />
          </div>
        ))}
      </div>
      )
      }
    </div>
  );
}
