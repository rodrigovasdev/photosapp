import { Photo} from '@/app/types/post';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PostProfileCard from './PostProfileCard';
interface HorizontalPostProps {
    post: Photo;
  }
export default function HorizontalPost({post} : HorizontalPostProps){
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const router = useRouter();
  useEffect(() => {
    const image = new window.Image();

    image.src = post.image_url;
    image.onload = () => {
      setDimensions({ width: image.width, height: image.height });
    };
  }, [post.image_url]);
  return (
    <div className="flex items-center p-24 justify-center h-full bg-neutral-300">
      <div className="flex flex-col items-center gap-8"> 
        <div className="relative inline-block">
          <Image
            alt=""
            width={dimensions.width}
            height={dimensions.height}
            priority
            src={post.image_url}
            className="rounded-xl bg-gray-900 shadow-xl ring-gray-400/10"
          />
          
          {post.previous_photo_id && (
            <button
              onClick={() => router.push(`/photo/${post.previous_photo_id}`)}
              className="absolute top-0 bottom-0 left-0 w-12 bg-black bg-opacity-50 text-white hover:bg-opacity-75 flex items-center justify-center rounded-l-md"
            >
              ←
            </button>
          )}
  
          {post.next_photo_id && (
            <button
              onClick={() => router.push(`/photo/${post.next_photo_id}`)}
              className="absolute top-0 bottom-0 right-0 w-12 bg-black bg-opacity-50 text-white hover:bg-opacity-75 flex items-center justify-center rounded-r-md"
            >
              →
            </button>
          )}
        </div>
  
        <div className="w-2/3">
            <PostProfileCard post={post} />
        </div>
      </div>
    </div>
  );
  
}