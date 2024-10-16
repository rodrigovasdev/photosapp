import { Post } from '@/app/types/post';
import { MapPinIcon,CameraIcon,ChatBubbleBottomCenterIcon,HeartIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
interface ProfileCardProps {
    post: Post;
  }
export default function PostProfileCard ({post} : ProfileCardProps){

    return(
        <div className="px-8 sm:pl-10 bg-neutral-200 border-gray-500 grid justify-items-stretch rounded-lg lg:max-w-7xl py-5 ml-0 sm:ml-7 ">
                    <div className="bg-stone-600 rounded-lg py-2.5 justify-self-center flex items-center space-x-9 mr-7 px-8 pl-4 sm:px-12 w-11/12 ">
                            <Image
                            width={100}
                            height={100}
                            alt=""
                            src= {post.user.profile_image.large}
                            className="w-[5rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[7rem]"/>
                                <p className="text-2xl sm:text-4xl pr-14 font-semibold leading-7 text-white">{post.user.name}</p>                       
                        </div>
                        <h1 className="mt-5 sm:ml-10 pr-8 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{post.alt_description}</h1>
                        <ul role="list" className="mt-5 sm:ml-12 space-y-4 text-gray-600">
                            <li className="flex gap-x-3">
                            <CameraIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"></CameraIcon>
                            <span>
                                <strong className="font-semibold text-gray-900">{post.user.instagram_username? `Instagram: ${post.user.instagram_username}` : 'No registra nombre de usuario para Instagram'}</strong>
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <ChatBubbleBottomCenterIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600" ></ChatBubbleBottomCenterIcon>
                            <span>
                                <strong className="font-semibold text-gray-900">{post.user.twitter_username?  `Twitter: ${post.user.twitter_username}` : 'No registra nombre de usuario para Twitter'}</strong>
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <MapPinIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"></MapPinIcon>
                            <span>
                                <strong className="font-semibold text-gray-900">{post.user.location? post.user.location: 'No registra ubicacion'}</strong> 
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <HeartIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600"></HeartIcon>
                            <span>
                                <strong className="font-semibold text-gray-900">{post.likes}</strong> 
                            </span>
                            </li>
                        </ul>
                </div>
            );
}