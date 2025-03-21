'use client';
import { useEffect, useState } from 'react';
import HorizontalPost from './HorizontalPost';
import VerticalPost from './VerticalPost';
import BackButton from '../BackButton';
import { Photo } from '@/app/types/post';

interface PostDetailProps {
  post: Photo;
}
export default function PostDetail({post}: PostDetailProps){
    const [isHorizontal, setIsHorizontal] = useState(false);
    const urlAlbum = '/album/' + post.album_id;
    console.log(urlAlbum)
    useEffect(() => {
      const image = new Image();
      image.src = post.image_url;
      image.onload = () => {
        setIsHorizontal(image.width > image.height);
      };
    }, [post.image_url]);
    
        if (isHorizontal){
            return (
              <div className='h-full w-full bg-neutral-300'>
                <BackButton href={urlAlbum}></BackButton>
                <HorizontalPost post={post}></HorizontalPost>  
              </div>
                         
              );
        }else{
            return(
              <div className='sm:flex sm:flex-row h-full w-full bg-neutral-300'>
                <BackButton href={urlAlbum}></BackButton>
                <VerticalPost post={post}></VerticalPost>
              </div>               
              );
        }
}