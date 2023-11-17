export interface Character {
  id: number;
  name: string;
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterLocation {
  name: string;
  url: string;
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
    next: string | null;
    prev: string | null;
  };
  results?: Character[];
}

export interface SearchProps {
  setSearch: (value: string) => void;
}
