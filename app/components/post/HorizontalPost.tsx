import PostProfileCard from './PostProfileCard';
import Image from 'next/image';

export default function HorizontalPost({post} : any){
    return(
        <div className="relative grid justify-items-center bg-neutral-300 flex flex-col justify-center isolate overflow-hidden px-6 -mt-1 pb-12 lg:overflow-visible h-screen sm:h-full lg:px-0">
            <div className="mx-auto max-w-2xl  gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start ">
                <div className="p-6 lg:top-4  ">
                <Image
                    alt=""
                    width={post.width}
                    height={post.height}
                    src= {post.urls.full}
                    className="w-[24rem] rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 sm:w-[80rem]"
                />
                </div>
                <PostProfileCard post={post}></PostProfileCard>               
            </div>
        </div>
    );  
}