export interface Business {
  id: string;
  name: string;
  description?: string;
  media?: { images: Image[] };
  socialMedia: {
    instagram: Instagram;
  };
  category: Category;
  serviceLocations: Location[];
  tags: Tag[];
  createdAt: Date;
  updatedAt: Date;
  isVerified?: boolean;
}

interface Image {
  presentationUrl: string;
  thumbnailUrl: string;
  description?: string;
}
interface Instagram {
  id: string;
  name: string;
  followers: number;
  description?: string;
  posts?: number;
  businessFollowersId: string[];
  isVerified: boolean;
  imageId: string;
}

export interface Category {
  id: string;
  name: string;
  parentId?: Category["id"];
  description?: string;
}

interface Location {
  id: string;
  city: string;
  province: string;
  country: string;
  latitude?: number;
  longitude?: number;
}

interface Tag {
  id: string;
  name: string;
  description?: string;
}
