import { Show } from "@/types/show";

export const shows: Show[] = [
  {
    id: "1",
    name: "Alok",
    startDate: "2026-01-15",
    genre: "Electronic/House",
    wasPlayed: true,
    bio: "Brazilian DJ and producer, one of the biggest names in global electronic music, known for hits like 'Hear Me Now' and 'Never Let Me Go'.",
    imgUrl: "/singers/alok.png",
  },
  {
    id: "2",
    name: "Avril Lavigne",
    startDate: "2026-01-20",
    genre: "Punk",
    wasPlayed: true,
    bio: "Canadian singer-songwriter and pop punk icon of the 2000s, known for hits like 'Complicated' and 'Sk8er Boi'.",
    imgUrl: "/singers/avril-lavigne.png",
  },
  {
    id: "3",
    name: "Black Pantera",
    startDate: "2026-01-10",
    genre: "Rock",
    wasPlayed: true,
    bio: "Brazilian rapper known for his unique style blending funk, rap, and pop culture with irreverent and creative lyrics.",
    imgUrl: "/singers/black-pantera.png",
  },
  {
    id: "4",
    name: "Coldplay",
    startDate: "2026-01-05",
    genre: "Rock",
    wasPlayed: true,
    bio: "British alternative rock band, one of the biggest in the world, known for hits like 'Yellow', 'Fix You', and 'Viva la Vida'.",
    imgUrl: "/singers/coldplay.png",
  },
  {
    id: "5",
    name: "Djavan",
    startDate: "2026-01-12",
    genre: "MPB/Jazz",
    wasPlayed: true,
    bio: "Brazilian singer and songwriter, one of the greatest names in MPB, author of classics like 'Flor de Lis' and 'Oceano'.",
    imgUrl: "/singers/djavan.png",
  },
  {
    id: "6",
    name: "Dream Theater",
    startDate: "2026-01-18",
    genre: "Rock",
    wasPlayed: false,
    bio: "American progressive metal band, a worldwide reference in the genre, known for their technical virtuosity and complex compositions.",
    imgUrl: "/singers/dream-theater.png",
  },
  {
    id: "7",
    name: "Dua Lipa",
    startDate: "2026-01-25",
    genre: "Pop/Dance",
    wasPlayed: true,
    bio: "British pop singer and global phenomenon, known for hits like 'New Rules', 'Levitating', and 'Don't Start Now'.",
    imgUrl: "/singers/dua-lipa.png",
  },
  {
    id: "8",
    name: "Ed Sheeran",
    startDate: "2026-01-08",
    genre: "Rock",
    wasPlayed: true,
    bio: "British singer-songwriter, one of the most successful artists of his generation, known for 'Shape of You' and 'Perfect'.",
    imgUrl: "/singers/ed-sheeron.png",
  },
  {
    id: "9",
    name: "Emicida",
    startDate: "2026-01-14",
    genre: "Hip Hop/Rap",
    wasPlayed: true,
    bio: "Brazilian rapper, singer, and songwriter, one of the leading voices in national hip hop, celebrated for his conscious and poetic lyrics.",
    imgUrl: "/singers/emicida.png",
  },
  {
    id: "10",
    name: "Iron Maiden",
    startDate: "2026-01-02",
    genre: "Rock",
    wasPlayed: true,
    bio: "Legendary British heavy metal band and genre icon since the 80s, known for 'The Trooper' and 'Fear of the Dark'.",
    imgUrl: "/singers/iron-maiden.png",
  },
  {
    id: "11",
    name: "Justin Bieber",
    startDate: "2026-01-28",
    genre: "Pop/R&B",
    wasPlayed: true,
    bio: "Canadian pop and R&B singer, a global star since his teenage years, with hits like 'Baby', 'Sorry', and 'Peaches'.",
    imgUrl: "/singers/justin-bieber.png",
  },
  {
    id: "12",
    name: "Luisa Sonza",
    startDate: "2026-01-16",
    genre: "Pop/Funk",
    wasPlayed: true,
    bio: "Brazilian singer and songwriter, one of the biggest names in national pop, known for hits like 'Cachorrinhas' and 'Modo Turbo'.",
    imgUrl: "/singers/luisa-sonza.png",
  },
  {
    id: "13",
    name: "Måneskin",
    startDate: "2026-01-22",
    genre: "Rock",
    wasPlayed: true,
    bio: "Italian rock band, winners of Eurovision 2021, known for their glam rock style and electrifying stage energy.",
    imgUrl: "/singers/maneskin.png",
  },
  {
    id: "14",
    name: "Marshmello",
    startDate: "2026-01-30",
    genre: "EDM/Future Bass",
    wasPlayed: true,
    bio: "American electronic music DJ and producer, recognized for his signature helmet and hits like 'Happier' and 'Alone'.",
    imgUrl: "/singers/marshmallow.png",
  },
  {
    id: "15",
    name: "The Offspring",
    startDate: "2026-01-19",
    genre: "Rock",
    wasPlayed: true,
    bio: "American punk rock band and icon of the 90s, known for classics like 'Self Esteem' and 'The Kids Aren't Alright'.",
    imgUrl: "/singers/offspring.png",
  },
  {
    id: "16",
    name: "Rita Ora",
    startDate: "2026-01-26",
    genre: "Pop/R&B",
    wasPlayed: true,
    bio: "British pop and R&B singer, known for hits like 'Hot Right Now', 'I Will Never Let You Down', and 'Let You Love Me'.",
    imgUrl: "/singers/rita-ora.png",
  },
];

export const getAllShows = () => shows;

export const getWatchAgainShows = () => shows.filter((show) => show.wasPlayed);

export const getYesterdayShows = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return shows.filter((show) => {
    const showDate = new Date(show.startDate);
    return showDate < today;
  });
};

export const getRockShows = () =>
  shows.filter((show) => show.genre?.toLowerCase().includes("rock"));

export const getUpcomingShows = () => shows.filter((show) => !show.wasPlayed);

export const getShowsByGenre = (genre: string) =>
  shows.filter((show) =>
    show.genre.toLowerCase().includes(genre.toLowerCase()),
  );

export const getShowById = (id: string) => shows.find((show) => show.id === id);
