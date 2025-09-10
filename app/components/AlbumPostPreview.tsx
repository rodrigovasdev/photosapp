'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AlbumImage } from '@/app/types/post';
import { getPhotoById } from '@/app/services/api';
import Post from './post/Post';
import LoadingSpinner from './LoadingSpinner';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface PostPreviewProps {
  post: AlbumImage;
}

export default function AlbumPostPreview({ post }: PostPreviewProps) {
  const [showPost, setShowPost] = useState(false);
  const [photoData, setPhotoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const router = useRouter();

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (showPost) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPost]);

  const handleClick = async () => {
    setIsLoading(true);
    setShowPost(true);
    setError(null);
    setRetryCount(0);
    
    await loadPhoto();
  };

  const loadPhoto = async () => {
    try {
      console.log(`Intentando cargar foto ${post.id}...`);
      const response = await getPhotoById(post.id);
      console.log('API Response:', response);
      setPhotoData(response.photo);
      setError(null);
    } catch (error) {
      console.error('Error loading photo:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setIsLoading(true);
    setError(null);
    setRetryCount(prev => prev + 1);
    loadPhoto();
  };

  const handleClose = () => {
    setShowPost(false);
    setPhotoData(null);
    setError(null);
    setRetryCount(0);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <div
        className="cursor-pointer mt-7 mx-5 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
        onClick={handleClick} 
      >
        <Image
          src={post.reduced_image_url ?? ""} // Si no hay cover_url usa un placeholder
          height={1100}
          width={1100}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.description}</p>
          <p className="text-sm text-gray-500 mt-2">Creado el: {new Date(post.upload_date).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Modal Dialog */}
      {showPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-6xl max-h-[95vh] rounded-xl overflow-hidden">
            {/* Close Button */}

            {/* Content */}
            <div className="overflow-y-auto max-h-[95vh]">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center min-h-[50vh]">
                  <LoadingSpinner />
                  {retryCount > 0 && (
                    <span className="mt-4 text-sm text-gray-300">Intento {retryCount + 1}</span>
                  )}
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center p-8">
                  <span className="text-red-400 text-center mb-4">{error}</span>
                  <button
                    onClick={handleRetry}
                    className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    Reintentar
                  </button>
                </div>
              ) : photoData ? (
                <Post post={photoData} />
              ) : (
                <div className="flex items-center justify-center p-8">
                  <span className="text-white">No se pudo cargar la foto</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}