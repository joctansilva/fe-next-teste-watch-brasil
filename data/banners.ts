export interface BannerSlide {
  image: string;
  alt: string;
  buttonText: string;
  buttonColor: string;
}

export interface Banner {
  id: string;
  slides: BannerSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const banners: Banner[] = [
  {
    id: "home-main",
    slides: [
      {
        image: "/banners/banner4.png",
        alt: "Promoção Especial 1",
        buttonText: "GET A TAST OF AMSTERDAM",
        buttonColor: "#008630",
      },
      {
        image: "/banners/banner2.png",
        alt: "Promoção Especial 2",
        buttonText: "LOOK AT THE NEW SHOW",
        buttonColor: "#FF567E",
      },
      {
        image: "/banners/banner5.png",
        alt: "Promoção Especial 3",
        buttonText: "GET A TASTE OF A DIET COKE",
        buttonColor: "#DA0302",
      },
    ],
    autoPlay: true,
    autoPlayInterval: 5000,
  },
  {
    id: "exclusive-content",
    slides: [
      {
        image: "/banners/banner6.png",
        alt: "Conteúdo Exclusivo",
        buttonText: "GET A TASTE OF THE NEW COKE",
        buttonColor: "#DA0302",
      },
      {
        image: "/banners/banner1.png",
        alt: "LOOK AT THE NEW SHOW",
        buttonText: "LOOK AT THE NEW SHOW",
        buttonColor: "#FF567E",
      },
      {
        image: "/banners/banner3.png",
        alt: "Heineken Bottles",
        buttonText: "GET A TASTE OF AMSTERDAM",
        buttonColor: "#086306",
      },
    ],
    autoPlay: true,
    autoPlayInterval: 4000,
  },
];

// Helper para pegar banner por ID
export const getBannerById = (id: string) => banners.find((b) => b.id === id);
