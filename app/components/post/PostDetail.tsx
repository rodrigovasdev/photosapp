'use client';
import Post from './Post';
import BackButton from '../BackButton';
import { Photo } from '@/app/types/post';

interface PostDetailProps {
  post: Photo;
}

export default function PostDetail({ post }: PostDetailProps) {
  const urlAlbum = '/album/' + post.album_id;
  
  return (
    <div className='h-full w-full bg-neutral-300'>
      <BackButton href={urlAlbum} />
      <Post post={post} />
    </div>
  );
}