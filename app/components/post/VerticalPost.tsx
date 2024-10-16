import { Post } from '@/app/types/post';
import PostProfileCard from './PostProfileCard'
import Image from 'next/image';
interface VerticalPostProps {
  post: Post;
}
export default function VerticalPost({post} : VerticalPostProps){
    return(
        <div className="relative bg-neutral-300 isolate overflow-hidden w-full  px-6 py-6 sm:py-24  lg:overflow-visible lg:px-0">
                <div className="relative grid justify-items-center mx-auto grid max-w-2xl grid-cols-1 gap-y-16  lg:max-w-none lg:grid-cols-1 lg:items-start lg:gap-y-10">
                  <PostProfileCard post={post}></PostProfileCard>
                  <div className="mr-12 -mt-12 pl-12 sm:pl-1 sm:ml-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                      alt=""
                      width={post.width}
                      height={post.height}
                      src= {post.urls.full}
                      className=" max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-[20rem] sm:w-[57rem] "
                    />
                  </div>
                </div>
              </div>
            );
}