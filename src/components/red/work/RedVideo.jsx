import React, { useRef } from "react";
import RedVideoJS from "../RedVideoJS";

const RedVideo = () => {
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
    <>
      <div className='video video__red'>
        <RedVideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
      <span
        className='vj-cursor js-vj-cursor vj-cursor__red label_sample'
        style={{ "--x": "218.904px;", "--y": "413.014px;", "--opacity:": 0 }}
      >
        <span>
          <span className='d-block'>PLAY</span>
          <span className='d-block'>REEL</span>
        </span>
      </span>
    </>
  );
};

export default RedVideo;
