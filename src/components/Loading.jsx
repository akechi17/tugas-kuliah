import React, { useEffect, useState, useRef } from "react";
import useSound from "use-sound";

const Loading = ({ isEnter, setIsEnter, setCurrentSound }) => {
  const [play, { pause, sound }] = useSound("/audio/music.mp3", { loop: true });
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVanishing, setIsVanishing] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(false);
  const audioRef = useRef(null);

  // Circle circumference = 2 * π * r = 2 * π * 132 ≈ 829
  // Calculate stroke-dashoffset: 829 (empty) → 0 (full)
  const circumference = 829;
  const strokeDashoffset = circumference - (loadingProgress / 100) * circumference;

  // For clockwise vanish animation from top:
  // Loading: 829 → 0 (fills clockwise from top)
  // Vanish: Start from same position, continue clockwise to empty
  // We need to add 829 to make it vanish clockwise
  const vanishOffset = isVanishing ? circumference + strokeDashoffset : strokeDashoffset;

  // Show start button when loaded and vanishing animation is complete
  const showStartButton = isLoaded && showStartScreen;

  useEffect(() => {
    document.body.style.overflow = isEnter ? "auto" : "hidden";
  }, [isEnter]);

  const handleSkipIntro = () => {
    setIsEnter(true);
    setShowStartScreen(true);
  };

  useEffect(() => {
    // Create audio element to track download progress
    const audio = new Audio("/audio/music.mp3");
    audioRef.current = audio;

    const handleProgress = () => {
      if (audio.duration) {
        // Calculate download progress
        const buffered = audio.buffered;
        if (buffered.length > 0) {
          const loaded = buffered.end(0);
          const total = audio.duration;
          const progress = Math.min((loaded / total) * 100, 100);
          setLoadingProgress(progress);
        }
      }
    };

    const handleCanPlayThrough = () => {
      setLoadingProgress(100);
      setIsLoaded(true);

      // Start vanish animation after loading completes
      setTimeout(() => {
        setIsVanishing(true);

        // Show start button after vanish animation completes (1.5s)
        setTimeout(() => {
          setShowStartScreen(true);
        }, 1500);
      }, 800);
    };

    audio.addEventListener("progress", handleProgress);
    audio.addEventListener("canplaythrough", handleCanPlayThrough);

    // Start loading the audio
    audio.load();

    return () => {
      audio.removeEventListener("progress", handleProgress);
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  const handleClick = () => {
    sound?.play();
    setCurrentSound(sound);
    setIsEnter(true);
  };
  const style = isEnter
    ? {
        position: "fixed",
        top: "0px",
        zIndex: -999,
        width: "100%",
        height: "100%",
        left: "0px",
        backgroundColor: "rgb(13, 13, 13)",
        opacity: 0,
        visibility: "hidden",
      }
    : {
        position: "fixed",
        top: "0px",
        zIndex: 99999999,
        width: "100%",
        height: "100%",
        left: "0px",
        backgroundColor: "#0d0d0d",
      };
  return (
    <div className='page-loading js-page-loading is-progress' style={style}>
      <button
        onClick={handleSkipIntro}
        className='skip-intro-btn'
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: 'transparent',
          color: '#B7AB98',
          border: '1px solid #B7AB98',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          zIndex: 999999999,
          opacity: isEnter ? 0 : 1,
          transition: 'opacity 0.3s ease',
          pointerEvents: isEnter ? 'none' : 'auto',
        }}
        aria-label='Skip intro animation'
      >
        Skip Intro
      </button>
      <div
        className='page-loading_inner js-page-loading_inner'
        style={{
          "--po": vanishOffset,
          "--opacity": 2,
        }}
      >
        <svg
          id='page-loading_circle'
          width='270'
          height='270'
          viewBox='0 0 270 270'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            opacity: isVanishing ? 0 : 1,
            transition: isVanishing ? 'opacity 1.5s ease-out' : 'none',
          }}
        >
          <circle
            cx='136'
            cy='136'
            r='132'
            stroke='#B7AB98'
            style={{
              transition: isVanishing ? 'stroke-dashoffset 1.5s ease-in-out' : 'none',
            }}
          ></circle>
        </svg>
        <div className='page-loading_logo'>
          <img
            id='page-loading_logo'
            src='images/logo.gif'
            width='64'
            height='64'
            alt='logo'
            style={{
              transform: showStartButton ? "translate(0px, -40px)" : "translate(0px, 0px)",
              opacity: isEnter ? 0 : 1,
              transition: "transform 0.4s ease",
            }}
          />
        </div>
        <button
          id='js-page-loading_start'
          className='body-text page-loading_start'
          style={{
            pointerEvents: showStartButton ? "auto" : "none",
            opacity: showStartButton && !isEnter ? 1 : 0,
            transform: "translate(0px, -40px)",
          }}
          onClick={handleClick}
          aria-label='Enter site with background music'
        >
          Start
        </button>
        <span
          id='js-page-loading_text'
          className='page-loading_text'
          style={{
            opacity: isVanishing ? 0 : 1,
            transition: isVanishing ? 'opacity 1.5s ease-out' : 'none',
          }}
        >
          <b className='js-loading_text'>{Math.round(loadingProgress)}</b>%
        </span>
      </div>
    </div>
  );
};

export default Loading;
