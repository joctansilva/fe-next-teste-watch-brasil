export interface Show {
  id: string;
  nome: string;
  startDate: string;
  genre: string;
  wasPlayed: boolean;
  bio: string;
  imgUrl: string;
}

export type ShowCategory = "watchAgain" | "featured" | "upcoming";
