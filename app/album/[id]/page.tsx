import { Suspense } from "react";
import AlbumContent from "./AlbumContent";
import AlbumLoading from "./AlbumLoading";

interface Params {
  params: {
    id: string;
  };
}

export default function Home({ params }: Params) {
  return (
    <Suspense fallback={<AlbumLoading albumId={params.id} />}>
      <AlbumContent albumId={params.id} />
    </Suspense>
  );
}

