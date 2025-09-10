import { Photo } from '@/app/types/post';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import PostProfileCard from './PostProfileCard';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { getPhotoById } from '@/app/services/api';

interface PostProps {
  post: Photo;
  onClose?: () => void;
}

export default function Post({ post, onClose }: PostProps) {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentPost, setCurrentPost] = useState<Photo>(post);
  const [isNavigating, setIsNavigating] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    setCurrentPost(post);
    setImageLoaded(false);
    setLoading(true);
  }, [post]);

  useEffect(() => {
    const image = new window.Image();
    image.src = currentPost.image_url;
    image.onload = () => {
      const width = image.width;
      const height = image.height;
      setDimensions({ width, height });
      setIsHorizontal(width > height); // Si es más ancha que alta, es horizontal
      setLoading(false);
      console.log(`Image dimensions: ${width}x${height}, isHorizontal: ${width > height}`)
    };
  }, [currentPost.image_url]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsNavigating(false);
  };

  const handleNavigation = async (photoId: string | number) => {
    setIsNavigating(true);
    setImageLoaded(false);
    
    try {
      const response = await getPhotoById(Number(photoId));
      setCurrentPost(response.photo);
    } catch (error) {
      console.error('Error loading photo:', error);
      setIsNavigating(false);
    }
  };




  if (loading) {
    return (
      <div className="rounded-xl flex flex-col items-center justify-center min-h-[50vh]">
        <LoadingSpinner />
      </div>
    );
  }

  // Layout Horizontal (para imágenes landscape)
  if (isHorizontal) {
    return (
      <div className="rounded-xl items-center -mt-24 md:-mt-0 justify-center h-screen md:h-full relative">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-30 hover:bg-opacity-40 text-white rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg className="h-6 w-6 font-semibold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        {(!imageLoaded || isNavigating) && (
          <div className="flex items-center justify-center h-64 rounded-t-xl">
            <LoadingSpinner />
          </div>
        )}
        <Image
            alt=""
            width={800}
            height={dimensions.height}
            priority
            src={currentPost.image_url}
            onLoad={handleImageLoad}
            className={`rounded-t-xl shadow-xl ring-gray-400/10 ${(!imageLoaded || isNavigating) ? 'hidden' : ''}`}
        />
        <PostProfileCard 
            post={currentPost}
            showNavigation={true}
            onPreviousClick={currentPost.previous_photo_id ? () => handleNavigation(currentPost.previous_photo_id!) : undefined}
            onNextClick={currentPost.next_photo_id ? () => handleNavigation(currentPost.next_photo_id!) : undefined}
        />
      </div>
    );
  }

  // Layout Vertical (para imágenes portrait o cuadradas)
  return (
      <div className="rounded-xl relative grid justify-items-center mx-auto max-w-2xl">
            {/* Close Button */}
            {onClose && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-30 hover:bg-opacity-40 text-white rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <svg className="h-6 w-6 font-semibold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            
            {(!imageLoaded || isNavigating) && (
              <div className="flex items-center justify-center h-96 w-full rounded-t-xl">
                <LoadingSpinner />
              </div>
            )}
            <Image
              alt=""
              width={dimensions.width}
              height={dimensions.height}
              src={currentPost.image_url}
              priority
              onLoad={handleImageLoad}
              className={`rounded-t-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-full ${(!imageLoaded || isNavigating) ? 'hidden' : ''}`}
            />
            <PostProfileCard 
              post={currentPost}
              showNavigation={true}
              onPreviousClick={currentPost.previous_photo_id ? () => handleNavigation(currentPost.previous_photo_id!) : undefined}
              onNextClick={currentPost.next_photo_id ? () => handleNavigation(currentPost.next_photo_id!) : undefined}
            />
      </div>
  );
}
