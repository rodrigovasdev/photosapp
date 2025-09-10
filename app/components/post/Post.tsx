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
  const [imageLoaded, setImageLoaded] = useState(false);
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
      console.log(`Image dimensions: ${width}x${height}, isHorizontal: ${width > height}`)
    };
  }, [post.image_url]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };




  // Layout Horizontal (para imágenes landscape)
  if (isHorizontal) {
    return (
      <div className="rounded-xl items-center -mt-24 md:-mt-0 justify-center h-screen md:h-full">
        {!imageLoaded && (
          <div className="flex items-center justify-center h-64 bg-gray-800 rounded-t-xl">
            <LoadingSpinner />
          </div>
        )}
        <Image
            alt=""
            width={800}
            height={dimensions.height}
            priority
            src={post.image_url}
            onLoad={handleImageLoad}
            className={`rounded-t-xl shadow-xl ring-gray-400/10 ${!imageLoaded ? 'hidden' : ''}`}
        />
        <PostProfileCard 
            post={post}
            showNavigation={true}
            onPreviousClick={post.previous_photo_id ? () => router.push(`/photo/${post.previous_photo_id}`) : undefined}
            onNextClick={post.next_photo_id ? () => router.push(`/photo/${post.next_photo_id}`) : undefined}
        />
      </div>
    );
  }

  // Layout Vertical (para imágenes portrait o cuadradas)
  return (
      <div className="rounded-xl relative grid justify-items-center mx-auto max-w-2xl">
            {!imageLoaded && (
              <div className="flex items-center justify-center h-96 w-full rounded-t-xl">
                <LoadingSpinner />
              </div>
            )}
            <Image
              alt=""
              width={dimensions.width}
              height={dimensions.height}
              src={post.image_url}
              priority
              onLoad={handleImageLoad}
              className={`rounded-t-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-full ${!imageLoaded ? 'hidden' : ''}`}
            />
            <PostProfileCard 
              post={post}
              showNavigation={true}
              onPreviousClick={post.previous_photo_id ? () => router.push(`/photo/${post.previous_photo_id}`) : undefined}
              onNextClick={post.next_photo_id ? () => router.push(`/photo/${post.next_photo_id}`) : undefined}
            />
      </div>
  );
}
