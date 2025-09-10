import AlbumPostPreview from "@/app/components/AlbumPostPreview";
import { getAlbumById } from "@/app/services/api";
import { AlbumImage } from "@/app/types/post";

interface AlbumContentProps {
  albumId: string;
}

export default async function AlbumContent({ albumId }: AlbumContentProps) {
  // Obtenemos los datos del álbum
  const { album, album_description, images } = await getAlbumById(albumId);
  
  return (
    <div className="bg-neutral-300 py-20 h-full min-h-screen">

      <div className="mx-5 pl-5">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg border border-stone-200 border-l-4 border-l-orange-500 hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-3xl font-bold mb-2 text-stone-800">{album}</h1>
          <p className="text-stone-600 leading-relaxed">{album_description}</p>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></div>
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
