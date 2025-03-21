import { getPhotoById } from "@/app/services/api";
import PostDetail from "@/app/components/post/PostDetail";
import { Suspense } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";

interface Params {
  params: {
    id: string;
  };
}

export default async function DetailPost({params}:Params) {

    const id = parseInt(params.id, 10); 
    if (isNaN(id)) {
      return <div>ID no válido</div>;
    }
    const post = await getPhotoById(id);

    return (
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <PostDetail post={post.photo} ></PostDetail>
      </Suspense>     
      );  
}