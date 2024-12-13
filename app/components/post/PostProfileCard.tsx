import { Photo } from '@/app/types/post';
import { HeartIcon,BookOpenIcon } from '@heroicons/react/20/solid'

interface ProfileCardProps {
    post: Photo;
  }
export default function PostProfileCard ({post} : ProfileCardProps){

    return(
        <div className="px-8 sm:pl-10 bg-neutral-200 border-gray-500 grid justify-items-stretch rounded-lg lg:max-w-7xl py-5 ml-0 sm:ml-7 ">
                    <div className="bg-stone-600 rounded-lg py-2.5 justify-self-center flex items-center space-x-9 mr-7 px-8 pl-4 sm:px-12 w-11/12 ">
                            
                                <p className="text-2xl sm:text-4xl pr-14 font-semibold leading-7 text-white">{post.title}</p>                       
                        </div>
                        <h1 className="mt-5 sm:ml-10 pr-8 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{post.description}</h1>
                        <ul role="list" className="mt-5 sm:ml-12 space-y-4 text-gray-600">

                            <li className="flex gap-x-3">
                            <HeartIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"></HeartIcon>
                            <span>
                                <strong className="font-semibold text-gray-900">{post.likes}</strong> 
                            </span>
                            </li>

                            <li className="flex gap-x-3">
                            <BookOpenIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"></BookOpenIcon>
                            <span>
                                <strong className="font-semibold text-gray-900">{post.album_name}</strong> 
                            </span>
                            </li>
                        </ul>
                </div>
            );
}