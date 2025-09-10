import { Suspense } from "react";
import PostListContent from "./components/home/PostListContent";
import PostListLoading from "./components/home/PostListLoading";

export default function Home() {
  return (
    <div className="bg-neutral-300 h-screen">
      <Suspense fallback={<PostListLoading />}>
        <PostListContent />
      </Suspense>
    </div>
  );
}


