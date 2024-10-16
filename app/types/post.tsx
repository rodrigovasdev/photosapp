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