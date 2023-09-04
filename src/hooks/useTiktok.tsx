import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'src/api/tiktok';

export const useGetPosts = () => {
  return useQuery(['posts'], getPosts, {
    retry: true,
    refetchOnWindowFocus: true
  });
};
