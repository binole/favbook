export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  authors?: string[];
  thumbnail?: string;
  description?: string;
  averageRating?: number;
  ratingsCount?: number;
}
