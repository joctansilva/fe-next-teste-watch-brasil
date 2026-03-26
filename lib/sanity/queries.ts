import groq from "groq";

export const showsQuery = groq`
  *[_type == "show"] | order(order asc) {
    "id": _id,
    name,
    bio,
    genre,
    startDate,
    wasPlayed,
    imgUrl
  }
`;

export const genresQuery = groq`
  *[_type == "genre"] | order(order asc) {
    "id": _id,
    name,
    subtitle,
    gradient,
    wasPlayed,
    url
  }
`;

export const inLiveQuery = groq`
  *[_type == "inLiveShow"] | order(order asc) {
    "id": _id,
    name,
    stage,
    isLive,
    dateTime,
    image
  }
`;

export const exclusiveQuery = groq`
  *[_type == "exclusiveContent"] | order(order asc) {
    "id": _id,
    name,
    subtitle,
    showLandmark,
    cover,
    url
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    heroArtistName,
    heroStageName,
    heroCameraType,
    heroIsLive,
    sectionLineUp,
    sectionInLive,
    sectionYesterdayShows,
    sectionExclusiveContent,
    sectionRockSingers,
    sectionWatchAgain,
    sectionFestivalForYou,
    sectionFestivalDescription
  }
`;
