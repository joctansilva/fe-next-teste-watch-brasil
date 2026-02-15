export interface SocialMedia {
  id: string;
  name: string;
  url: string;
  icon: string;
  size: number;
}

export const socialMedia: SocialMedia[] = [
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com/c/WatchBrasil",
    icon: "youtube",
    size: 24,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/watch-brasil",
    icon: "linkedin",
    size: 24,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/watchtv_brasil",
    icon: "instagram",
    size: 24,
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/watchbrasiltv/?locale=pt_BR",
    icon: "facebook",
    size: 12,
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://www.tiktok.com/@watchtv_brasil",
    icon: "tiktok",
    size: 20,
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "",
    icon: "twitter",
    size: 24,
  },
];
