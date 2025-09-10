'use client'

import { getAlbumById } from "@/app/services/api";
import { useEffect, useState } from "react";

interface AlbumLoadingProps {
  albumId: string;
}

export default function AlbumLoading({ albumId }: AlbumLoadingProps) {
  const [imageCount, setImageCount] = useState(6); // Default fallback

  useEffect(() => {
    const fetchImageCount = async () => {
      try {
        const { images } = await getAlbumById(albumId);
        setImageCount(images?.length || 6);
      } catch (error) {
        console.error('Error fetching album for loading:', error);
        // Keep default count on error
      }
    };

    fetchImageCount();
  }, [albumId]);

  return (
    <div className="bg-neutral-300 pb-8 h-full md:h-screen">
      {/* Back Button Placeholder - Same structure as BackButton */}
      <div className="pt-24 pl-5 bg-neutral-300">
        <div className="h-8 w-24 bg-gray-400 rounded animate-pulse"></div>
      </div>

      {/* Album Info Placeholder - Same structure as original */}
      <div className="mx-5 my-5 pl-5">
        <div className="bg-stone-600 shadow-lg rounded-lg p-6 max-w-lg">
          <div className="h-8 bg-gray-500 rounded mb-2 w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-500 rounded w-full animate-pulse"></div>
        </div>
      </div>

      {/* Images Grid Placeholder - Exact count from API */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5">
        {Array.from({ length: imageCount }).map((_, index) => (
          <div key={index} className="overflow-hidden">
            <div className="mt-7 mx-5 bg-white shadow-md rounded-lg overflow-hidden">
              {/* Image placeholder with same dimensions */}
              <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
              
              {/* Content placeholder with same padding and structure */}
              <div className="p-4">
                {/* Title placeholder */}
                <div className="h-6 bg-gray-300 rounded mb-2 w-3/4 animate-pulse"></div>
                {/* Description placeholder */}
                <div className="h-4 bg-gray-300 rounded mb-1 w-full animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-2/3 animate-pulse"></div>
                {/* Date placeholder */}
                <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
