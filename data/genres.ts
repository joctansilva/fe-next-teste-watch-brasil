export interface Genre {
  id: string;
  name: string;
  subtitle: string;
  gradient: string;
  wasPlayed: boolean;
}

export const genres: Genre[] = [
  {
    id: "1",
    name: "Rock",
    subtitle: "Festival",
    gradient: "linear-gradient(320deg, #2433C0 0%, #4F60FF 100%)",
    wasPlayed: true,
  },
  {
    id: "2",
    name: "Pop",
    subtitle: "Festival",
    gradient: "linear-gradient(320deg, #016500 0%, #06DE03 100%)",
    wasPlayed: true,
  },
  {
    id: "3",
    name: "Funk",
    subtitle: "Festival",
    gradient: "linear-gradient(320deg, #5E006C 0%, #AF01CA 100%)",
    wasPlayed: true,
  },
  {
    id: "4",
    name: "Jazz",
    subtitle: "Festival",
    gradient: "linear-gradient(320deg, #BF4900 0%, #FF6100 100%)",
    wasPlayed: true,
  },
  {
    id: "5",
    name: "Samba",
    subtitle: "Festival",
    gradient: "linear-gradient(320deg, #FF009A 0%, #A30062 100%)",
    wasPlayed: true,
  },
  {
    id: "6",
    name: "MPB",
    subtitle: "Festival",
    gradient: "linear-gradient(320deg, #7A5000 0%, #FFA801 100%)",
    wasPlayed: true,
  },
  {
    id: "7",
    name: "Trap",
    subtitle: "Festival",
    gradient: "linear-gradient(320deg, #006A8D 0%, #00C0FF 100%)",
    wasPlayed: true,
  },
  {
    id: "8",
    name: "Rap",
    subtitle: "Festival",
    gradient: "linear-gradient(320deg, #A80100 0%, #FF0100 100%)",
    wasPlayed: true,
  },
];

// Helper para filtrar gêneros assistidos
export const getWatchedGenres = () => genres.filter((genre) => genre.wasPlayed);
