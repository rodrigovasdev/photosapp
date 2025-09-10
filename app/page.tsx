import { Suspense } from "react";
import PostListContent from "./components/home/PostListContent";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
  return (
    <div className="bg-neutral-300 h-screen">
      <Suspense fallback={<LoadingSpinner fullscreen={true} />}>
        <PostListContent />
      </Suspense>
    </div>
  );
}


