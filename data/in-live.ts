export interface InLive {
  id: string;
  name: string;
  stage: string;
  isLive: boolean;
  dateTime: string; // Formato: dd.mm.aa - 00:00h
  image: string;
}

export const inLiveShows: InLive[] = [
  {
    id: "1",
    name: "Demi Lovato",
    stage: "Stage Sunset",
    isLive: true,
    dateTime: "15.02.26 - 20:00h",
    image: "/in-live/demi-lovato.png",
  },
  {
    id: "2",
    name: "Taylor Swift",
    stage: "Main Stage",
    isLive: true,
    dateTime: "15.02.26 - 21:30h",
    image: "/in-live/demi-lovato2.png",
  },
  {
    id: "3",
    name: "Bruno Mars",
    stage: "Rock Arena",
    isLive: false,
    dateTime: "16.02.26 - 19:00h",
    image: "/in-live/demi-lovato3.png",
  },
  {
    id: "4",
    name: "Ariana Grande",
    stage: "Pop Paradise",
    isLive: true,
    dateTime: "15.02.26 - 22:00h",
    image: "/in-live/demi-lovato4.png",
  },
  {
    id: "5",
    name: "Ed Sheeran",
    stage: "Acoustic Stage",
    isLive: false,
    dateTime: "16.02.26 - 20:30h",
    image: "/in-live/demi-lovato5.png",
  },
  {
    id: "6",
    name: "Billie Eilish",
    stage: "Electronic Zone",
    isLive: true,
    dateTime: "15.02.26 - 23:00h",
    image: "/in-live/demi-lovato6.png",
  },
];

// Helper para filtrar apenas shows ao vivo
export const getCurrentLiveShows = () =>
  inLiveShows.filter((show) => show.isLive);

// Helper para filtrar shows agendados (não ao vivo)
export const getScheduledShows = () =>
  inLiveShows.filter((show) => !show.isLive);
