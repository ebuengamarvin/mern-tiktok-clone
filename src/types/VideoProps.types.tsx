import { VideoFooterProps } from './VideoFooterProps.types';
import { VideoSidebarProps } from './VideoSidebarProps.types';

export type VideoProps = {
  url: string;
} & VideoFooterProps &
  VideoSidebarProps;
