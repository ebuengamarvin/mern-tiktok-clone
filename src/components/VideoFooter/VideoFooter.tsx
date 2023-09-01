import { Typography, styled } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Marquee from 'react-fast-marquee';
import { VideoFooterProps } from 'src/types/VideoFooterProps.types';

const VideoFooterContainer = styled('div')`
  position: relative;
  color: white;
  bottom: 150px;
  margin-left: 50px;
  display: flex;
`;

const VideoFooterText = styled('div')`
  flex: 1;

  & > h3 {
    padding-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
  }

  & > p {
    padding-bottom: 20px;
    font-size: 12px;
  }
`;

const VideoFooterTicker = styled('div')`
  height: fit-content;
  margin-left: 30px;
  width: 60%;
`;

const VideoFooterRecord = styled('img')`
  animation: spinTheRecord infinite 5s linear;
  height: 50px;
  filter: invert(1);
  position: absolute;
  bottom: 0;
  right: 20px;

  @keyframes spinTheRecord {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const VideoFooter = (props: VideoFooterProps) => {
  const { channel, description, song } = props;

  return (
    <VideoFooterContainer>
      <VideoFooterText>
        <Typography variant="h3">@{channel}</Typography>
        <Typography variant="body1">{description}</Typography>
        <VideoFooterTicker>
          <MusicNoteIcon sx={{ position: 'absolute', ml: -4 }} />
          <Marquee>{song}</Marquee>
        </VideoFooterTicker>
      </VideoFooterText>
      <VideoFooterRecord
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="record icon"
      />
    </VideoFooterContainer>
  );
};

export default VideoFooter;
