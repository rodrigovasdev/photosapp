import AlbumContent from "./AlbumContent";

interface Params {
  params: {
    id: string;
  };
}

export default function Home({ params }: Params) {
  return (
    <AlbumContent albumId={params.id} />
  );
}

