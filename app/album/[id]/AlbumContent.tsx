import AlbumPostPreview from "@/app/components/AlbumPostPreview";
import BackButton from "@/app/components/BackButton";
import { getAlbumById } from "@/app/services/api";
import { AlbumImage } from "@/app/types/post";

interface AlbumContentProps {
  albumId: string;
}

export default async function AlbumContent({ albumId }: AlbumContentProps) {
  // Obtenemos los datos del álbum
  const { album, album_description, images } = await getAlbumById(albumId);
  
  return (
    <div className="bg-neutral-300 pb-8 h-full md:h-screen">
      <BackButton href="/" />

      <div className="mx-5 my-5 pl-5">
        <div className="bg-stone-600 shadow-lg rounded-lg p-6 max-w-lg">
          <h1 className="text-3xl font-bold mb-2 text-white">{album}</h1>
          <p className="text-gray-100">{album_description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5">
        {images.map((image: AlbumImage) => (
          <div key={image.id} className="overflow-hidden">
            <AlbumPostPreview post={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
