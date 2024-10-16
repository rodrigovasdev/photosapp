import PostPreview from './PostPreview';
import { getPosts} from '../../services/api';
import {Post} from '../../types/post'


export default async function PostList() {
  const posts = await getPosts();

  return (
    <div className="grid pt-16 bg-neutral-300 grid-cols-1 pb-8 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
      {Array.isArray(posts) && posts.map((post: Post, index: number) => (
  <PostPreview key={index} post={post} />
))}
    </div>
  );
}


  



