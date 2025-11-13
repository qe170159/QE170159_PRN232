export interface Movie {
  id: string;
  title: string;
  genre?: string;
  rating?: number;
  posterImage?: string;
}

export type SortBy = 'title' | 'rating';
