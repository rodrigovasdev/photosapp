import { getPhotoById } from "@/app/services/api";
import PostDetail from "@/app/components/post/PostDetail";
import { Suspense } from "react";
import Loading from "./loading";

interface Params {
  params: {
    id: string;
  };
}

export default async function DetailPost({params}:Params) {
  console.log(params.id)
    const id = parseInt(params.id, 10); 
    if (isNaN(id)) {
      return <div>ID no válido</div>;
    }
    const post = await getPhotoById(id);
    console.log('estos son los psot')
    console.log(post)
    return (
      <Suspense fallback={<Loading></Loading>}>
        <PostDetail post={post.photo} ></PostDetail>
      </Suspense>     
      );  
}