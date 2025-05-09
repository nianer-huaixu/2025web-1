import { useState, useRef,useEffect } from 'react';

export default function VideoPlayerTest() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videoSources = [
    'https://www.yangdong.co:8443/yangdong-new/videos/1.mp4',
    'https://www.yangdong.co:8443/yangdong-new/videos/2.mp4',
    'https://www.yangdong.co:8443/yangdong-new/videos/3.mp4',
    'https://www.yangdong.co:8443/yangdong-new/videos/4.mp4',
    'https://www.yangdong.co:8443/yangdong-new/videos/5.mp4',
    'https://www.yangdong.co:8443/yangdong-new/videos/6.mp4',
    'https://www.yangdong.co:8443/yangdong-new/videos/7.mp4',
    'https://www.yangdong.co:8443/yangdong-new/videos/8.mp4'
  ];

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoSources.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      // 所有视频播放完成，可以循环播放或执行其他逻辑
      setCurrentVideoIndex(0);
    }
  };
  useEffect(() => {
    if (currentVideoIndex < videoSources.length - 1) {
      const nextVideo = new Audio(videoSources[currentVideoIndex + 1]);
      nextVideo.preload = 'auto';
    }
  }, [currentVideoIndex]);
  return (
    <div>
      <video
        ref={videoRef}
        src={videoSources[currentVideoIndex]}
        muted
        playsInline
        autoPlay
        onEnded={handleVideoEnd}
      />
    </div>
  );
}