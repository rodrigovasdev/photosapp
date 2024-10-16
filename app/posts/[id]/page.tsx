import { getPostById } from "@/app/services/api";
import PostDetail from "@/app/components/post/PostDetail";
import { Suspense } from "react";
import Loading from "./loading";

export default async function DetailPost(id:any) {
    const post = await getPostById(id.params.id);
    return (
      <Suspense fallback={<Loading></Loading>}>
        <PostDetail post={post} ></PostDetail>
      </Suspense>     
      );  
}