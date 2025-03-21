import { Photo } from '@/app/types/post';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PostProfileCard from './PostProfileCard';
import LoadingSpinner from '@/app/components/LoadingSpinner';

interface VerticalPostProps {
  post: Photo;
}
export default function VerticalPost({post} : VerticalPostProps){
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const image = new window.Image();

    image.src = post.image_url;
    image.onload = () => {
      setDimensions({ width: image.width, height: image.height });
      setLoading(false);
    };
  }, [post.image_url]);
  
    if (loading) {
      return (<div className='h-scren w-full bg-neutral-300'>
                <LoadingSpinner></LoadingSpinner>
              </div>);
    }else{
      return(
        <div className="relative bg-neutral-300 isolate overflow-hidden w-full h-max  px-6 py-6 sm:pt-44  lg:overflow-visible lg:px-0">
                <div className="relative grid justify-items-center mx-auto grid max-w-2xl grid-cols-1 gap-y-16  lg:max-w-none lg:grid-cols-1 lg:items-start lg:gap-y-10">
                  <div className='w-full md:w-2/3'>
                    <PostProfileCard post={post}></PostProfileCard>
                  </div>
                     
                  <div className='mr-12 -mt-12 pl-12 sm:pl-1 sm:ml-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
                       
                    <div className="relative inline-block">
                      <Image
                        alt=""
                        width={dimensions.width}
                        height={dimensions.height}
                        src= {post.image_url}
                        priority
                        className="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-full sm:w-[40rem] "
                      />
                      {/* Botón Anterior (a la izquierda, con la misma altura que la imagen) */ post.previous_photo_id &&
                        <button
                          onClick={() => router.push(`/photo/${post.previous_photo_id}`)}
                          className="absolute top-0 bottom-0 left-0 w-12 bg-black bg-opacity-50 text-white hover:bg-opacity-75 flex items-center justify-center rounded-l-md"
                        >
                          ←
                        </button>}

                        {/* Botón Siguiente (a la derecha, con la misma altura que la imagen) */ post.next_photo_id &&
                        <button
                        onClick={() => router.push(`/photo/${post.next_photo_id}`)}
                          className="absolute top-0 bottom-0 right-0 w-12 bg-black bg-opacity-50 text-white hover:bg-opacity-75 flex items-center justify-center rounded-r-md"
                        >
                          →
                        </button> }
                    </div>
                  </div> 
                </div>
              </div>
            );
    }
    
}