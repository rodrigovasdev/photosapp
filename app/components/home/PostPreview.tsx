'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Post } from '@/app/types/post';
interface PostPreviewProps {
  post: Post;
}
export default function PostPreview({post} : PostPreviewProps) {
  const router = useRouter();
    return(
        <div className="cursor-pointer mt-7 mx-5 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
            onClick={() => router.push(`/posts/${post.id}`)}>
          <Image
            src={post.urls.regular}
            height={300}
            width={400}
            alt={post.user.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold">{post.user.name}</h2>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-700 font-semibold">{post.likes} Likes</span>
            </div>
          </div>
        </div>
    );

}