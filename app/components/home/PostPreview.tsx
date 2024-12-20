'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Album } from '@/app/types/post';
interface PostPreviewProps {
  post: Album;
}
export default function PostPreview({ post }: PostPreviewProps) {
  const router = useRouter();
  console.log(post);
  
  return (
    <div
      className="cursor-pointer mt-7 mx-5 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
      onClick={() => router.push(`/album/${post.id}`)} // Cambiado la ruta a /albums/ en vez de /posts/
    >
      <Image
        src={post.cover_url ?? ""} // Si no hay cover_url usa un placeholder
        height={1100}
        width={1100}
        alt={post.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{post.name}</h2>
        <p className="text-gray-700">{post.description}</p>
        <p className="text-sm text-gray-500 mt-2">Creado el: {new Date(post.creation_date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}