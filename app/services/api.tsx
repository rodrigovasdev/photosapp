
export const getPosts = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos?per_page=30&client_id=${process.env.API_ID}`);
      const posts = await response.json();
      return posts;

    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts');
    }
  };

export const getPostById = async (id: string) => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${process.env.API_ID}`);
    
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