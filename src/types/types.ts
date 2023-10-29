export type CardData = {
  results: CardItem[];
};

export type CardItem = {
  sprites: PokemonSprites;
  id: number;
  name: string;
  order: string;
};

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
  other?: {
    [key in string]?: {
      [spriteName in string]?: string | null;
    };
  };
  versions?: {
    [version in string]?: {
      [gameTitle in string]?: {
        [spriteName in string]?: string;
      };
    };
  };
}
