import { Suspense } from "react";
import AlbumContent from "./AlbumContent";
import LoadingSpinner from "@/app/components/LoadingSpinner";

interface Params {
  params: {
    id: string;
  };
}

export default function Home({ params }: Params) {
  return (
    <Suspense fallback={<LoadingSpinner bg="bg-neutral-300" fullscreen={true} />}>
      <AlbumContent albumId={params.id} />
    </Suspense>
  );
}

