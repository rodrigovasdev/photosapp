import PostPreview from './PostPreview';
import { getPosts} from '../../services/api';

interface Post {
  id: string;
  description: string;
  likes: number;
  urls: {
    small: string;
    full: string;
  };
  user: {
    name: string;
    profile_image: string;
  };
}

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div className="grid pt-16 bg-neutral-300 grid-cols-1 pb-8 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
      {posts.map((post: Post, index: number) => (
        <PostPreview key={index} post={post} />
      ))}
    </div>
  );
}


  



