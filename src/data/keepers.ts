import { StaffMember } from './teams';

export type KeeperGroup = {
  slug: string;
  name: string;
  staff: StaffMember[];
  trainingSchedule?: string;
};

export const keeperGroups: KeeperGroup[] = [
  {
    slug: 'middenbouw',
    name: 'Middenbouw',
    staff: [
      {
        name: 'Noah Acou',
        role: 'Trainer',
        image: '/images/onbekend-persoon___serialized1.png',
      },
    ],
    trainingSchedule: 'Elke Dinsdag van 18u tot 19u.',
  },
  {
    slug: 'bovenbouw',
    name: 'Bovenbouw',
    staff: [],
    trainingSchedule: '',
  },
];
