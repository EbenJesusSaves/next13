export interface ProductImage {
  url: string;
  alt?: string;
}

export interface PRoduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: ProductImage[];
}
