import { useRef, useState } from 'react';
import { styled } from '@mui/material';
import VideoFooter from '../VideoFooter';
import VideoSidebar from '../VideoSidebar';
import { VideoProps } from 'src/types/VideoProps.types';

const VideoContainer = styled('div')`
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
`;

const VideoPlayer = styled('video')`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;

const Video = (props: VideoProps) => {
  const { url, channel, description, song, likes, shares, messages } = props;
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleVideoPress() {
    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      videoRef.current?.play();
      setPlaying(true);
    }
  }

  return (
    <VideoContainer>
      <VideoPlayer
        ref={videoRef}
        loop
        src={url}
        onClick={handleVideoPress}
      ></VideoPlayer>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </VideoContainer>
  );
};

export default Video;
