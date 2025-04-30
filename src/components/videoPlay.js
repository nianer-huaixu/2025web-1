import React, { useRef } from 'react';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <div>
      <video ref={videoRef} controls onClick={togglePlay}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <br />
      <button onClick={handlePlay}></button>
      <button onClick={handlePause}></button> */}
    </div>
  );
};

export default VideoPlayer;
