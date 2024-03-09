import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import VideoCard from "./VideoCard";

export default function VideoGridList() {
  const [videoList, setVideoList] = useState([]);
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

        console.log(result);
        setVideoList(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12  grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {videoList.map((item) => (
        <VideoCard key={item.id} videoItem={item} />
      ))}
    </div>
  );
}
