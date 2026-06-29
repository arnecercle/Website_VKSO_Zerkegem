import { CDN } from "@/lib/constants";

const teamPhotos = [
  { src: `${CDN}/A-Ploeg%20FINALJPG___serialized1.jpg`, alt: "A-Ploeg" },
  { src: `${CDN}/B-Ploeg%20FINAL%20JPG.jpg`, alt: "B-Ploeg" },
  { src: `${CDN}/VROUW%20PLOEG%20FINAL%20JPG___serialized1.jpg`, alt: "Vrouwen" },
  { src: `${CDN}/Beloften%20FINAL%20JPG___serialized1.jpg`, alt: "Beloften" },
  { src: `${CDN}/U21___serialized1.jpg`, alt: "U21" },
  { src: `${CDN}/U17%20FINAL%20PNG___serialized1.png`, alt: "U17" },
  { src: `${CDN}/U15___serialized1.jpg`, alt: "U15" },
  { src: `${CDN}/U13___serialized1.jpg`, alt: "U13" },
  { src: `${CDN}/U11___serialized1.jpg`, alt: "U11" },
  { src: `${CDN}/U10___serialized1.jpg`, alt: "U10" },
  { src: `${CDN}/U9___serialized1.jpg`, alt: "U9" },
  { src: `${CDN}/U8___serialized1.jpg`, alt: "U8" },
  { src: `${CDN}/U7___serialized1.jpg`, alt: "U7" },
  { src: `${CDN}/U6___serialized1.jpg`, alt: "U6" },
];

import HomePageClient from "./HomePageClient";

export default function HomePage() {
  return <HomePageClient teamPhotos={teamPhotos} />;
}
