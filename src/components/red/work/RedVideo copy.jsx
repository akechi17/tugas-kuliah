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
        <div className='videoPlayer op-0'>
          <div className='videoPlayer_inner videoPlayer_inner__red js-videoPlayer_inner__red'>
            <video
              id='videoPlayer_red'
              playsInline=''
              muted=''
              loop=''
              preload='none'
              width='1920'
              height='1080'
              src='video/reel.mp4'
              poster='images/reel-poster.jpg'
            ></video>
            <button className='js-btnBigPlay videoPlayer_btn'>
              <img src='icons/ic-play.svg' alt='icon-play' />
            </button>
          </div>
        </div>
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
