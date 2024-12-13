'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AlbumImage } from '@/app/types/post';
interface PostPreviewProps {
  post: AlbumImage;
}
export default function AlbumPostPreview({ post }: PostPreviewProps) {
  const router = useRouter();
  console.log(post);
  
  return (
    <div
      className="cursor-pointer mt-7 mx-5 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
      onClick={() => router.push(`/photo/${post.id}`)} // Cambiado la ruta a /albums/ en vez de /posts/
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
  );
}