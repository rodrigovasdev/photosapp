'use client';
import { useEffect, useState } from 'react';
import HorizontalPost from './HorizontalPost';
import VerticalPost from './VerticalPost';
import BackButton from '../BackButton';

export default function PostDetail({post}: any){
    const [isHorizontal, setIsHorizontal] = useState(false);
    useEffect(() => {
      const image = new Image();
      image.src = post.urls.full;
      image.onload = () => {
        setIsHorizontal(image.width > image.height);
      };
    }, [post.urls.full]);
    
        if (isHorizontal){
            return (
              <div>
                <BackButton></BackButton>
                <HorizontalPost post={post}></HorizontalPost>  
              </div>
                         
              );
        }else{
            return(
              <div className='sm:flex sm:flex-row'>
                <BackButton></BackButton>
                <VerticalPost post={post}></VerticalPost>
              </div>               
              );
        }
}