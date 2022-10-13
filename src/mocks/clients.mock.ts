import { media } from "./media.mock";

interface Client {
  image: string;
}

const {
  landing: { clients },
} = media;

export const clientsList: Client[] = [
  {
    image: clients.jiggle,
  },
  {
    image: clients.symtric,
  },
  {
    image: clients.resecurb,
  },
  {
    image: clients.wishelp,
  },
];
