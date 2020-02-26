export interface Volume {
  id: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors?: string[];
    description?: string;
    averageRating?: number;
    ratingsCount?: number;
    imageLinks: {
      thumbnail?: string;
    };
  };
}
