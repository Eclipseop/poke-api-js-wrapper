declare module 'pokemon' {
  export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Species[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  }
      
  export interface Ability {
    ability: Species;
    is_hidden: boolean;
    slot: number;
  }
      
  export interface Species {
    name: string;
    url: string;
  }
      
  export interface GameIndex {
    game_index: number;
    version: Species;
  }
      
  export interface HeldItem {
    item: Species;
    version_details: VersionDetail[];
  }
      
  export interface VersionDetail {
    rarity: number;
    version: Species;
  }
      
  export interface Move {
    move: Species;
    version_group_details: VersionGroupDetail[];
  }
      
  export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: Species;
    version_group: Species;
  }
      
  export interface GenerationV {
    "black-white": Sprites;
  }
      
  export interface GenerationIv {
    "diamond-pearl": Sprites;
    "heartgold-soulsilver": Sprites;
    platinum: Sprites;
  }
      
  export interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationIi;
    "generation-iii": GenerationIii;
    "generation-iv": GenerationIv;
    "generation-v": GenerationV;
    "generation-vi": { [key: string]: Home };
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
  }
      
  export interface Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other?: Other;
    versions?: Versions;
    animated?: Sprites;
  }
      
  export interface GenerationI {
    "red-blue": RedBlue;
    yellow: RedBlue;
  }
      
  export interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  }
      
  export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Gold;
  }
      
  export interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
  }
      
  export interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent?: string;
  }
      
  export interface GenerationIii {
    emerald: Emerald;
    "firered-leafgreen": Gold;
    "ruby-sapphire": Gold;
  }
      
  export interface Emerald {
    front_default: string;
    front_shiny: string;
  }
      
  export interface Home {
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  }
      
  export interface GenerationVii {
    icons: DreamWorld;
    "ultra-sun-ultra-moon": Home;
  }
      
  export interface DreamWorld {
    front_default: string;
    front_female: null;
  }
      
  export interface GenerationViii {
    icons: DreamWorld;
  }
      
  export interface Other {
    dream_world: DreamWorld;
    home: Home;
    "official-artwork": OfficialArtwork;
  }
      
  export interface OfficialArtwork {
    front_default: string;
  }
      
  export interface Stat {
    base_stat: number;
    effort: number;
    stat: Species;
  }
      
  export interface Type {
    slot: number;
    type: Species;
  }
      
}

declare module 'berry' {
  export interface Berry {
    firmness:           Firmness;
    flavors:            Flavor[];
    growth_time:        number;
    id:                 number;
    item:               Firmness;
    max_harvest:        number;
    name:               string;
    natural_gift_power: number;
    natural_gift_type:  Firmness;
    size:               number;
    smoothness:         number;
    soil_dryness:       number;
  }
    
  export interface Firmness {
    name: string;
    url:  string;
  }
    
  export interface Flavor {
    flavor:  Firmness;
    potency: number;
  }
}

declare module 'berry-firmness' {
  export interface Firmness {
    id:      number;
    name:    string;
    berries: Berry[];
    names:   Name[];
  }

  export interface Berry {
    name: string;
    url:  string;
  }

  export interface Name {
    name:     string;
    language: Berry;
  }
}

declare module 'berry-flavor' {
  export interface Flavor {
    id:           number;
    name:         string;
    berries:      Berry[];
    contest_type: ContestType;
    names:        Name[];
  }

  export interface Berry {
    potency: number;
    berry:   ContestType;
  }

  export interface ContestType {
    name: string;
    url:  string;
  }

  export interface Name {
    name:     string;
    language: ContestType;
  }
}