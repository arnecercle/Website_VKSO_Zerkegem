import { CDN } from '@/lib/constants';

export type StaffMember = {
  name: string;
  role: string;
  image?: string;
};

export type Team = {
  slug: string;
  name: string;
  category: 'senior' | 'youth' | 'women';
  staff: StaffMember[];
  trainingSchedule?: string;
  image?: string;
  voetbalvlaanderenSlug?: string;
  children?: { slug: string; name: string }[];
};

export const teams: Team[] = [
  {
    slug: 'A-Kern',
    name: 'A-Kern',
    category: 'senior',
    image: `${CDN}/A-Ploeg%20FINALJPG___serialized1.jpg`,
    voetbalvlaanderenSlug: 'club/2669/ploeg/333863',
    staff: [
      {
        name: 'Lorenzo Frickelo',
        role: 'T1',
        image: `${CDN}/Lorenzo%20Frickelo___serialized2.jpg`,
      },
      {
        name: 'Timothy Scheyving',
        role: 'T2',
        image: `${CDN}/Timothy%20Scheyving___serialized2.jpg`,
      },
      {
        name: 'Jurrie Debruyne',
        role: 'Keepers',
        image: `${CDN}/IMG-20231005-WA0000___serialized1.jpg`,
      },
    ],
  },
  {
    slug: 'B-Kern',
    name: 'B-Kern',
    category: 'senior',
    image: `${CDN}/B-Ploeg%20FINAL%20JPG___serialized1.jpg`,
    staff: [
      {
        name: 'Peter Van der Heyden',
        role: 'T1',
        image: `${CDN}/Peter%20Van%20der%20Heyden___serialized1.jpg`,
      },
      {
        name: 'Jurrie Debruyne',
        role: 'Keepers',
        image: `${CDN}/IMG-20231005-WA0000___serialized1.jpg`,
      },
    ],
  },
  {
    slug: 'dameselftal',
    name: 'Dames',
    category: 'women',
    image: `${CDN}/VROUW%20PLOEG%20FINAL%20JPG___serialized1.jpg`,
    staff: [],
  },
  {
    slug: 'jeugd',
    name: 'Jeugd',
    category: 'youth',
    staff: [],
    children: [
      { slug: 'U6', name: 'U6' },
      { slug: 'U7', name: 'U7' },
      { slug: 'u9a', name: 'U8' },
      { slug: 'u9b', name: 'U9' },
      { slug: 'u10', name: 'U10' },
      { slug: 'u11', name: 'U11' },
      { slug: 'u12', name: 'U12' },
      { slug: 'u13', name: 'U13' },
      { slug: 'u15', name: 'U15' },
      { slug: 'u17', name: 'U17' },
      { slug: 'u21', name: 'U21' },
      { slug: 'keepers', name: 'Keepers' },
    ],
  },
];

export const youthTeams: Team[] = [
  {
    slug: 'U6',
    name: 'U6',
    category: 'youth',
    image: `${CDN}/U6___serialized1.jpg`,
    staff: [
      {
        name: 'Arne vandenberghe',
        role: 'Coach',
        image: `${CDN}/IMG-20230920-WA0003___serialized1.jpg`,
      },
    ],
    trainingSchedule: 'Elke Zaterdag van 11 uur tot 12 uur.',
  },
  {
    slug: 'U7',
    name: 'U7',
    category: 'youth',
    image: `${CDN}/U7___serialized1.jpg`,
    staff: [
      {
        name: 'Siebe Feys',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
      {
        name: 'Wim Feys',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
    ],
    trainingSchedule: '',
  },
  {
    slug: 'U9',
    name: 'U9',
    category: 'youth',
    image: `${CDN}/U9___serialized1.jpg`,
    staff: [
      {
        name: 'Cindy Beerlandt',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
    ],
    trainingSchedule: '',
  },
  {
    slug: 'U10',
    name: 'U10',
    category: 'youth',
    image: `${CDN}/U10___serialized1.jpg`,
    staff: [
      {
        name: 'Nils Haezebrouck',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
    ],
    trainingSchedule: '',
  },
  {
    slug: 'U11',
    name: 'U11',
    category: 'youth',
    image: `${CDN}/U11___serialized1.jpg`,
    staff: [
      {
        name: 'Noah Acou',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
      {
        name: 'Kevin Florée',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
    ],
    trainingSchedule: '',
  },
  {
    slug: 'U13',
    name: 'U13',
    category: 'youth',
    image: `${CDN}/U13___serialized1.jpg`,
    staff: [
      {
        name: 'Björn Van Cappel',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
    ],
    trainingSchedule: '',
  },
  {
    slug: 'U15',
    name: 'U15',
    category: 'youth',
    image: `${CDN}/U15___serialized1.jpg`,
    staff: [
      {
        name: 'Kevin Florée',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
      {
        name: 'Dieter Malfait',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
      {
        name: 'Dwight Malfait',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
    ],
    trainingSchedule: '',
  },
  {
    slug: 'U17',
    name: 'U17',
    category: 'youth',
    image: `${CDN}/U17%20FINAL%20PNG___serialized1.png`,
    staff: [],
    trainingSchedule: '',
  },
  {
    slug: 'U21',
    name: 'U21',
    category: 'youth',
    image: `${CDN}/U21%20FINAL%20JPG___serialized1.jpg`,
    staff: [
      {
        name: 'Björn Van Cappel',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
      {
        name: 'Chris Allemeersch',
        role: 'Coach',
        image: `${CDN}/onbekend-persoon___serialized1.png`,
      },
    ],
    trainingSchedule: '',
  },
];

const slugAliases: Record<string, string> = {
  'a-kern-dames': 'dameselftal',
};

export function getTeamBySlug(slug: string): Team | undefined {
  const resolved = slugAliases[slug] ?? slug;
  return [...teams, ...youthTeams].find((t) => t.slug === resolved);
}
