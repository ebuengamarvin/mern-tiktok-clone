import { useState } from 'react';
import { Typography, styled } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import { VideoSidebarProps } from 'src/types/VideoSidebarProps.types';

const VideoSidebarContainer = styled('div')`
  position: absolute;
  top: 50%;
  right: 10px;
  color: white;
`;

const VideoSidebarButton = styled('div')`
  padding: 18px;
  text-align: center;
  cursor: pointer;
`;

const VideoSidebar = (props: VideoSidebarProps) => {
  const { likes, shares, messages } = props;
  const [liked, setLiked] = useState(false);

  return (
    <VideoSidebarContainer>
      <VideoSidebarButton>
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={() => setLiked(true)} />
        )}
        <Typography variant="body1">{liked ? likes + 1 : likes}</Typography>
      </VideoSidebarButton>
      <VideoSidebarButton>
        <MessageIcon fontSize="large" />
        <Typography variant="body1">{messages}</Typography>
      </VideoSidebarButton>
      <VideoSidebarButton>
        <ShareIcon fontSize="large" />
        <Typography variant="body1">{shares}</Typography>
      </VideoSidebarButton>
    </VideoSidebarContainer>
  );
};

export default VideoSidebar;
