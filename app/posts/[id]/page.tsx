import { getPostById } from "@/app/services/api";
import PostDetail from "@/app/components/post/PostDetail";
import { Suspense } from "react";
import Loading from "./loading";

interface Params {
  params: {
    id: string;
  };
}

export default async function DetailPost({params}:Params) {
    const post = await getPostById(params.id);
    return (
      <Suspense fallback={<Loading></Loading>}>
        <PostDetail post={post} ></PostDetail>
      </Suspense>     
      );  
}