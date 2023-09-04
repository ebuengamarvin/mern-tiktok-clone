import { Box } from '@mui/material';
import Video from '../Video';
import { useGetPosts } from 'src/hooks/useTiktok';
import { VideoProps } from 'src/types/VideoProps.types';
import './Feed.css';

const Feed = () => {
  const { data: posts } = useGetPosts();

  return (
    <Box component="div" className="app">
      <Box component="div" className="app__videos">
        {posts?.data?.map((post: VideoProps) => (
          <Video
            channel={post.channel}
            description={post.description}
            song={post.song}
            url={post.url}
            likes={post.likes}
            shares={post.shares}
            messages={post.messages}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Feed;
