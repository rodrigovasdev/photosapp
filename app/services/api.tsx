
export const getPosts = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/album/all`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts = await response.json();
      return posts;

    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts');
    }
  };

export const getAlbumById = async (id: string) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/album/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
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
    // Primer intento: directo al backend
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(`${process.env.BACKEND_URL}/photo/${id}`, {
      method: 'GET',
      signal: controller.signal,
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const post = await response.json();
    return post;
  } catch (error) {
    console.warn('Direct API call failed, trying proxy...', error);
    
    // Segundo intento: usando nuestro API proxy
    try {
      const response = await fetch(`/api/photo/${id}`);
      
      if (!response.ok) {
        throw new Error(`Proxy error! status: ${response.status}`);
      }
      
      const post = await response.json();
      return post;
    } catch (proxyError) {
      console.error('Both direct and proxy calls failed:', proxyError);
      
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('La solicitud tardó demasiado tiempo');
      }
      if (error instanceof Error && error.message.includes('CORS')) {
        throw new Error('Error de CORS - problema de conexión con el servidor');
      }
      throw new Error('Error al conectar con el servidor');
    }
  }
};

