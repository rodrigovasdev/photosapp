export interface Post {
    id: string;
    description: string;
    likes: number;
    width: number;
    height: number;
    
    urls: {
      small: string;
      full: string;
      regular: string;
    };
    user: {
        name: string;
        instagram_username?: string; 
        twitter_username?: string; 
        location?: string; 
        profile_image: {
            large: string;
          };
    };
    alt_description: string;
    
  }

export interface Album {
    id: number;
    name: string;
    description: string;
    creation_date: string; // Podría ser Date si luego parseas el string
    cover_url: string | null;
  }
  
export interface AlbumsResponse {
    albums: Album[];
  }

export interface AlbumImage {
  id: number;
  title: string;
  description: string;
  upload_date: string; // Podrías usar Date si lo parseas
  likes: number;
  image_url: string;
  reduced_image_url: string | null;

}

export interface Photo {
  id: number;
  title: string;
  description: string;
  upload_date: string; // Podrías usar Date si lo parseas posteriormente.
  likes: number;
  image_url: string;
  album_id: number | null;
  album_name: string | null;
  previous_photo_id: string | null;
  next_photo_id: string | null;
  
}

export interface AlbumDetail {
  album: string;
  album_description: string;
  images: AlbumImage[];
}