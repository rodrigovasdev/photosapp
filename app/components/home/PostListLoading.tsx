'use client'

import { getPosts } from "../../services/api";
import { useEffect, useState } from "react";

export default function PostListLoading() {
  const [albumCount, setAlbumCount] = useState(6); // Default fallback

  useEffect(() => {
    const fetchAlbumCount = async () => {
      try {
        const posts = await getPosts();
        setAlbumCount(posts?.albums?.length || 6);
      } catch (error) {
        console.error('Error fetching albums for loading:', error);
        // Keep default count on error
      }
    };

    fetchAlbumCount();
  }, []);

  return (
    <div className="grid pt-16 bg-neutral-300 grid-cols-1 pb-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: albumCount }).map((_, index) => (
        <div key={index} className="cursor-pointer mt-7 mx-5 bg-white shadow-md rounded-lg overflow-hidden">
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
      ))}
    </div>
  );
}
