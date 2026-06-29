export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Teams',
    href: '/ploegen/',
    children: [
      { label: 'A-kern', href: '/ploegen/akern' },
      { label: 'B-Kern', href: '/ploegen/B-Kern' },
      { label: 'Beloften', href: '/ploegen/beloften-1' },
      { label: 'Dames', href: '/ploegen/dameselftal' },
      {
        label: 'Jeugd',
        href: '/ploegen/jeugd/',
        children: [
          { label: 'U6', href: '/ploegen/jeugd/U6' },
          { label: 'U7', href: '/ploegen/jeugd/U7' },
          { label: 'U8', href: '/ploegen/jeugd/u9a' },
          { label: 'U9', href: '/ploegen/jeugd/u9b' },
          { label: 'U10', href: '/ploegen/jeugd/u10' },
          { label: 'U11', href: '/ploegen/jeugd/u11' },
          { label: 'U12', href: '/ploegen/jeugd/u12' },
          { label: 'U13', href: '/ploegen/jeugd/u13' },
          { label: 'U15', href: '/ploegen/jeugd/u15' },
          { label: 'U17', href: '/ploegen/jeugd/u17' },
          { label: 'U21', href: '/ploegen/jeugd/u21' },
          { label: 'Keepers', href: '/ploegen/jeugd/keepers' },
        ],
      },
    ],
  },
  {
    label: 'Over ons',
    href: '/missie-en-visie/',
    children: [
      { label: 'Bestuur', href: '/missie-en-visie/bestuur' },
      { label: 'Ons Charter', href: '/missie-en-visie/ons-charter' },
      {
        label: 'Aanspreekpunt integriteit',
        href: '/missie-en-visie/aanspreekpunt-integriteit',
      },
      { label: 'Inschrijven', href: '/missie-en-visie/Inschrijven' },
      { label: 'Lidgeld', href: '/missie-en-visie/lidgeld' },
      { label: 'G-Voetbal', href: '/missie-en-visie/g-werking' },
      { label: 'Nieuws', href: '/missie-en-visie/nieuws' },
      { label: 'Evenementen', href: '/missie-en-visie/evenementen' },
    ],
  },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Contact', href: '/contact' },
  {
    label: 'Links',
    href: '/links/',
    children: [
      { label: 'Spond', href: '/links/spond' },
      { label: 'Kledij', href: '/links/webshop' },
      { label: 'Social Media', href: '/links/social-media' },
      { label: 'Partner Cercle Brugge', href: '/links/de-groene-bron' },
      { label: 'Nuttige documenten', href: '/links/nuttige-documenten' },
      { label: 'RBFA', href: 'https://www.rbfa.be/nl' },
      { label: 'Wedstrijdbladen', href: 'https://sso.rbfa.be/' },
      {
        label: 'Voetbal Vlaanderen',
        href: 'https://www.voetbalvlaanderen.be/',
      },
    ],
  },
];

export const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/VksoZerkegemFanpage/',
    ariaLabel: 'Bezoek onze Facebook-pagina',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/vkso_zerkegem/',
    ariaLabel: 'Bezoek ons Instagram-profiel',
  },
];
