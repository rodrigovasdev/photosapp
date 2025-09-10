import { Photo } from '@/app/types/post';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PostProfileCard from './PostProfileCard';
import LoadingSpinner from '@/app/components/LoadingSpinner';

interface PostProps {
  post: Photo;
}

export default function Post({ post }: PostProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const image = new window.Image();
    image.src = post.image_url;
    image.onload = () => {
      const width = image.width;
      const height = image.height;
      setDimensions({ width, height });
      setIsHorizontal(width > height); // Si es más ancha que alta, es horizontal
      setLoading(false);
    };
  }, [post.image_url]);

  if (loading) {
    return (
      <div className='h-screen w-full bg-neutral-300'>
        <LoadingSpinner />
      </div>
    );
  }

  // Layout Horizontal (para imágenes landscape)
  if (isHorizontal) {
    return (
      <div className="flex items-center -mt-24 md:-mt-0 p-0 md:p-24 justify-center h-screen md:h-full bg-neutral-300">
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
          </div>
    
          <div className="w-full px-5 md:px-0 md:w-2/3">
            <PostProfileCard 
              post={post}
              showNavigation={true}
              onPreviousClick={post.previous_photo_id ? () => router.push(`/photo/${post.previous_photo_id}`) : undefined}
              onNextClick={post.next_photo_id ? () => router.push(`/photo/${post.next_photo_id}`) : undefined}
            />
          </div>
        </div>
      </div>
    );
  }

  // Layout Vertical (para imágenes portrait o cuadradas)
  return (
    <div className="relative bg-neutral-300 isolate overflow-hidden w-full h-max px-6 py-6 sm:pt-44 lg:overflow-visible lg:px-0">
      <div className="relative grid justify-items-center mx-auto max-w-2xl grid-cols-1 gap-y-16">
        <div className='mr-12 -mt-12 pl-12 sm:pl-1 sm:ml-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <div className="relative inline-block">
            <Image
              alt=""
              width={dimensions.width}
              height={dimensions.height}
              src={post.image_url}
              priority
              className="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-full sm:w-[40rem]"
            />
            <PostProfileCard 
              post={post}
              showNavigation={true}
              onPreviousClick={post.previous_photo_id ? () => router.push(`/photo/${post.previous_photo_id}`) : undefined}
              onNextClick={post.next_photo_id ? () => router.push(`/photo/${post.next_photo_id}`) : undefined}
            />
          </div>
        </div> 
      </div>
    </div>
  );
}
