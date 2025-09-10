import { Photo } from '@/app/types/post';
import { HeartIcon, BookOpenIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'

interface ProfileCardProps {
    post: Photo;
    onPreviousClick?: () => void;
    onNextClick?: () => void;
    showNavigation?: boolean;
}

export default function PostProfileCard({ post, onPreviousClick, onNextClick, showNavigation = false }: ProfileCardProps) {
    return (
        <div className="w-full bg-white rounded-b-2xl p-6 shadow-lg border-l-4 border-orange-600">
            {/* Title Section */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-stone-800 mb-2">{post.title}</h1>
                <div className="w-16 h-1 bg-amber-400 rounded-full"></div>
            </div>

            {/* Info Section - Horizontal Layout */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8">
                {/* Likes */}
                <div className="flex items-center gap-3 bg-stone-50 rounded-lg px-4 py-3 border border-stone-200">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                        <HeartIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <p className="text-sm text-stone-600 font-medium">Likes</p>
                        <p className="text-xl font-bold text-stone-800">{post.likes}</p>
                    </div>
                </div>

                {/* Album */}
                {post.album_name && (
                    <div className="flex items-center gap-3 bg-stone-50 rounded-lg px-4 py-3 border border-stone-200">
                        <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                            <BookOpenIcon className="h-5 w-5 text-stone-800" />
                        </div>
                        <div>
                            <p className="text-sm text-stone-600 font-medium">Álbum</p>
                            <p className="text-xl font-bold text-stone-800">{post.album_name}</p>
                        </div>
                    </div>
                )}

                {/* Upload Date */}
                <div className="flex items-center gap-3 bg-stone-50 rounded-lg px-4 py-3 border border-stone-200">
                    <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-stone-600 font-medium">Fecha</p>
                        <p className="text-lg font-bold text-stone-800">
                            {new Date(post.upload_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            {showNavigation && (onPreviousClick || onNextClick) && (
                <div className="mt-6 pt-6 border-t border-stone-200">
                    <div className="flex justify-between gap-4">
                        {/* Previous Button */}
                        {onPreviousClick && post.previous_photo_id ? (
                            <button
                                onClick={onPreviousClick}
                                className="flex items-center gap-2 bg-stone-700 hover:bg-stone-800 text-white px-4 py-3 rounded-lg transition-colors duration-200 flex-1 justify-center"
                            >
                                <ArrowLeftIcon className="h-5 w-5" />
                                <span className="font-medium">Anterior</span>
                            </button>
                        ) : (
                            <div className="flex-1"></div>
                        )}

                        {/* Next Button */}
                        {onNextClick && post.next_photo_id ? (
                            <button
                                onClick={onNextClick}
                                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg transition-colors duration-200 flex-1 justify-center"
                            >
                                <span className="font-medium">Siguiente</span>
                                <ArrowRightIcon className="h-5 w-5" />
                            </button>
                        ) : onPreviousClick && post.previous_photo_id ? (
                            <div className="flex-1"></div>
                        ) : null}
                    </div>
                </div>
            )}
        </div>

);
}