export type slideData = {
  src: string;
  alt: string;
};

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;

  seoTitle?: string;
  seoDescription?: string;

  keywords?: string[];
  tags?: string[];

  canonical?: string;

  thumbnail: string;
  coverImage: string;

  case1?: string;
  case2?: string;
  service?: string;

  featured?: boolean;

  contentHtml: string;
}
