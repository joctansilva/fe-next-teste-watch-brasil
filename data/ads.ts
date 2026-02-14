export interface Ad {
  id: string;
  brand: string;
  image: string;
  alt: string;
  badgeText: string;
  badgeIcon: "info" | "star" | "alert" | "megaphone";
  buttonText: string;
  buttonClassName: string;
  buttonIcon: "arrow-right" | "external-link" | "chevron-right";
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  onClick?: () => void;
}

export const ads: Ad[] = [
  {
    id: "1",
    brand: "Nike",
    image: "/ads/nike/nike-image.png",
    alt: "Logo Nike",
    badgeText: "Announcement",
    badgeIcon: "info",
    buttonText: "learn more",
    buttonClassName: "bg-[#C39E93] hover:bg-[#C89e99]",
    buttonIcon: "arrow-right",
    logo: {
      src: "/ads/nike/logo-nike.svg",
      alt: "Nike Logo",
      width: 60,
      height: 60,
    },
  },
  {
    id: "2",
    brand: "Tesla",
    image: "/ads/tesla/tesla-image.png",
    alt: "Logo tesla",
    badgeText: "Announcement",
    badgeIcon: "info",
    buttonText: "learn more",
    buttonClassName: "bg-[#BE1E22] hover:bg-[#BE1E22]",
    buttonIcon: "arrow-right",
    logo: {
      src: "/ads/tesla/logo-tesla.svg",
      alt: "Tesla Logo",
      width: 60,
      height: 120,
      className: "h-16",
    },
  },
  {
    id: "3",
    brand: "Apple",
    image: "/ads/apple/apple-image.png",
    alt: "Logo apple",
    badgeText: "Announcement",
    badgeIcon: "info",
    buttonText: "learn more",
    buttonClassName: "bg-[#000] hover:bg-[#000]",
    buttonIcon: "arrow-right",
    logo: {
      src: "/ads/apple/logo-apple.svg",
      alt: "Apple Logo",
      width: 25,
      height: 25,
    },
  },
];
