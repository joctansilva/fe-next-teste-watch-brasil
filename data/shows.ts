import { Show } from "@/types/show";

export const shows: Show[] = [
  {
    id: "1",
    nome: "Alok",
    startDate: "2026-03-15",
    genre: "Electronic/House",
    wasPlayed: true,
    bio: "DJ e produtor brasileiro, um dos maiores nomes da música eletrônica mundial, conhecido por hits como 'Hear Me Now' e 'Never Let Me Go'.",
    imgUrl: "/singers/alok.png",
  },
  {
    id: "2",
    nome: "Avril Lavigne",
    startDate: "2026-04-20",
    genre: "Punk",
    wasPlayed: true,
    bio: "Cantora e compositora canadense, ícone do pop punk dos anos 2000 com hits como 'Complicated' e 'Sk8er Boi'.",
    imgUrl: "/singers/avril-lavigne.png",
  },
  {
    id: "3",
    nome: "Black Pantera",
    startDate: "2026-05-10",
    genre: "Rock",
    wasPlayed: true,
    bio: "Rapper brasileiro conhecido por seu estilo único que mistura funk, rap e cultura pop, com letras irreverentes e criativas.",
    imgUrl: "/singers/black-pantera.png",
  },
  {
    id: "4",
    nome: "Coldplay",
    startDate: "2026-06-05",
    genre: "Rock",
    wasPlayed: true,
    bio: "Banda britânica de rock alternativo, uma das maiores do mundo, conhecida por sucessos como 'Yellow', 'Fix You' e 'Viva la Vida'.",
    imgUrl: "/singers/coldplay.png",
  },
  {
    id: "5",
    nome: "Djavan",
    startDate: "2026-07-12",
    genre: "MPB/Jazz",
    wasPlayed: true,
    bio: "Cantor e compositor brasileiro, um dos maiores nomes da MPB, autor de clássicos como 'Flor de Lis' e 'Oceano'.",
    imgUrl: "/singers/djavan.png",
  },
  {
    id: "6",
    nome: "Dream Theater",
    startDate: "2026-08-18",
    genre: "Rock",
    wasPlayed: false,
    bio: "Banda americana de metal progressivo, referência mundial do gênero, conhecida por sua virtuosidade técnica e composições complexas.",
    imgUrl: "/singers/dream-theater.png",
  },
  {
    id: "7",
    nome: "Dua Lipa",
    startDate: "2026-09-25",
    genre: "Pop/Dance",
    wasPlayed: true,
    bio: "Cantora britânica de pop, fenômeno global com hits como 'New Rules', 'Levitating' e 'Don't Start Now'.",
    imgUrl: "/singers/dua-lipa.png",
  },
  {
    id: "8",
    nome: "Ed Sheeran",
    startDate: "2026-10-08",
    genre: "Rock",
    wasPlayed: true,
    bio: "Cantor e compositor britânico, um dos artistas mais bem-sucedidos da atualidade, conhecido por 'Shape of You' e 'Perfect'.",
    imgUrl: "/singers/ed-sheeron.png",
  },
  {
    id: "9",
    nome: "Emicida",
    startDate: "2026-11-14",
    genre: "Hip Hop/Rap",
    wasPlayed: true,
    bio: "Rapper, cantor e compositor brasileiro, um dos principais nomes do hip hop nacional, conhecido por suas letras conscientes e poéticas.",
    imgUrl: "/singers/emicida.png",
  },
  {
    id: "10",
    nome: "Iron Maiden",
    startDate: "2026-12-02",
    genre: "Rock",
    wasPlayed: true,
    bio: "Lendária banda britânica de heavy metal, ícone do gênero desde os anos 80, conhecida por 'The Trooper' e 'Fear of the Dark'.",
    imgUrl: "/singers/iron-maiden.png",
  },
  {
    id: "11",
    nome: "Justin Bieber",
    startDate: "2026-03-28",
    genre: "Pop/R&B",
    wasPlayed: true,
    bio: "Cantor canadense de pop e R&B, astro global desde adolescente, com sucessos como 'Baby', 'Sorry' e 'Peaches'.",
    imgUrl: "/singers/justin-bieber.png",
  },
  {
    id: "12",
    nome: "Luisa Sonza",
    startDate: "2026-04-16",
    genre: "Pop/Funk",
    wasPlayed: true,
    bio: "Cantora e compositora brasileira, um dos maiores nomes do pop nacional, conhecida por hits como 'Cachorrinhas' e 'Modo Turbo'.",
    imgUrl: "/singers/luisa-sonza.png",
  },
  {
    id: "13",
    nome: "Måneskin",
    startDate: "2026-05-22",
    genre: "Rock",
    wasPlayed: true,
    bio: "Banda italiana de rock, vencedora do Eurovision 2021, conhecida por seu estilo glam rock e energia no palco.",
    imgUrl: "/singers/maneskin.png",
  },
  {
    id: "14",
    nome: "Marshmello",
    startDate: "2026-06-30",
    genre: "EDM/Future Bass",
    wasPlayed: true,
    bio: "DJ e produtor americano de música eletrônica, reconhecido por sua máscara característica e hits como 'Happier' e 'Alone'.",
    imgUrl: "/singers/marshmallow.png",
  },
  {
    id: "15",
    nome: "The Offspring",
    startDate: "2026-07-19",
    genre: "Rock",
    wasPlayed: true,
    bio: "Banda americana de punk rock, ícone dos anos 90, conhecida por clássicos como 'Self Esteem' e 'The Kids Aren't Alright'.",
    imgUrl: "/singers/offspring.png",
  },
  {
    id: "16",
    nome: "Rita Ora",
    startDate: "2026-08-26",
    genre: "Pop/R&B",
    wasPlayed: true,
    bio: "Cantora britânica de pop e R&B, conhecida por sucessos como 'Hot Right Now', 'I Will Never Let You Down' e 'Let You Love Me'.",
    imgUrl: "/singers/rita-ora.png",
  },
];

// Funções utilitárias para filtrar shows
export const getWatchAgainShows = () => shows.filter((show) => show.wasPlayed);

export const getUpcomingShows = () => shows.filter((show) => !show.wasPlayed);
export const getRockShows = () =>
  shows.filter((show) => show.genre?.toLowerCase().trim() === "rock");
export const getShowsByGenre = (genre: string) =>
  shows.filter((show) =>
    show.genre.toLowerCase().includes(genre.toLowerCase()),
  );

export const getShowById = (id: string) => shows.find((show) => show.id === id);
