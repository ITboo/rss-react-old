export interface Character {
  id: number;
  name: string;
  status: string;
  type?: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image: string;
  episode?: string[];
  gender: string;
  species?: string;
  created?: string;
  url?: string;
}

export interface CharacterCardProps {
  name: string;
  image: string;
  index?: number;
  page: string | number;
  id: number;
}

export interface CharactersProps {
  data: Character[];
  openModal: (id: number) => void;
}
export interface CharacterProps {
  data: Character;
}

export interface CharacterData {
  info?: {
    count: number;
    pages: number;
  };
  results: Character[];
}

export interface SearchProps {
  setSearch: (value: string) => void;
}
