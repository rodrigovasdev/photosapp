
export const getPosts = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/album/all`);
      const posts = await response.json();
      return posts;

    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts');
    }
  };

export const getAlbumById = async (id: string) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/album/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};

export const getPhotoById = async (id: number) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/photo/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};

