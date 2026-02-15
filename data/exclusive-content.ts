export interface Exclusive {
  id: string;
  name: string;
  subtitle: string;
  showLandmark: boolean;
  cover: string;
  url: string;
}

export const exclusive: Exclusive[] = [
  {
    id: "1",
    name: "BackStage",
    subtitle: "Festival",
    showLandmark: true,
    cover: "/exclusive/back-stage-cover.png",
    url: "/",
  },
  {
    id: "2",
    name: "Interviews",
    subtitle: "Festival",
    showLandmark: true,
    cover: "/exclusive/interview-cover.png",
    url: "/",
  },
  {
    id: "3",
    name: "Latest News",
    subtitle: "Festival",
    showLandmark: true,
    cover: "/exclusive/latest-news-cover.png",
    url: "/",
  },
  {
    id: "4",
    name: "Last Editions",
    subtitle: "Festival",
    showLandmark: true,
    cover: "/exclusive/last-editions-cover.png",
    url: "/",
  },
];
