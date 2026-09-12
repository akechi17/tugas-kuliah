import React, { useRef } from "react";
import VideoJS from "../VideoJS";

const Video = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    loop: true,
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: "video/reel.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className='video' id='video'>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default Video;
