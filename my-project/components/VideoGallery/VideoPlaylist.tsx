// VideoPlaylist.tsx
"use client";
import { useState, useEffect } from "react";

const videosList = [
  { video: "/images/vid-9.mp4", title: "Republic day 01" },
  { video: "/images/vid-3.mp4", title: "Republic day 02" },
  { video: "/images/vid-1.mp4", title: "Republic day 03" },
  { video: "/images/vid-2.mp4", title: "Republic day 04" },
  { video: "/images/vid-4.mp4", title: "Republic day 05" },
  { video: "/images/vid-5.mp4", title: "Republic day 06" },
  { video: "/images/vid-6.mp4", title: "Republic day 07" },
  { video: "/images/vid-7.mp4", title: "Republic day 08" },
  { video: "/images/vid-8.mp4", title: "Republic day 09" },
];

const VideoPlaylist = () => {
  const [activeVideo, setActiveVideo] = useState(videosList[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleVideoClick = (video: { video: string; title: string }) => {
    setActiveVideo(video);
  };

  if (!isMounted) return null;

  return (
    <div className="container w-full mx-auto p-5 flex flex-wrap gap-5 items-start">
      <div className="main-video-container flex-1 bg-white p-4 max-w-xxl">
        <video src={activeVideo.video} controls loop className="w-full mb-3" />
        <h3 className="text-lg text-gray-700">{activeVideo.title}</h3>
      </div>

      <div className="video-list-container flex-1 border-l-2 border-gray-200 bg-white p-4 space-y-4 max-w-sm">
        {videosList.map((item, index) => (
          <div
            key={index}
            className={`list flex items-center gap-4 p-3 border border-gray-200 cursor-pointer rounded-md ${
              item.video === activeVideo.video ? "bg-yellow-400" : ""
            }`}
            onClick={() => handleVideoClick(item)}
          >
            <video src={item.video} className="list-video w-24 rounded-md" />
            <h3
              className={`list-title text-md ${
                item.video === activeVideo.video
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlaylist;
