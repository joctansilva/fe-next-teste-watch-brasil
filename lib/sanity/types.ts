export interface SanityShow {
  id: string;
  name: string;
  bio: string;
  genre: string;
  startDate: string;
  wasPlayed: boolean;
  imgUrl: string;
}

export interface SanityGenre {
  id: string;
  name: string;
  subtitle: string;
  gradient: string;
  wasPlayed: boolean;
  url: string;
}

export interface SanityInLiveShow {
  id: string;
  name: string;
  stage: string;
  isLive: boolean;
  dateTime: string;
  image: string;
}

export interface SanityExclusiveContent {
  id: string;
  name: string;
  subtitle: string;
  showLandmark: boolean;
  cover: string;
  url: string;
}

export interface SanityHomePage {
  heroArtistName: string;
  heroStageName: string;
  heroCameraType: string;
  heroIsLive: boolean;
  sectionLineUp: string;
  sectionInLive: string;
  sectionYesterdayShows: string;
  sectionExclusiveContent: string;
  sectionRockSingers: string;
  sectionWatchAgain: string;
  sectionFestivalForYou: string;
  sectionFestivalDescription: string;
}
