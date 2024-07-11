interface TypeEffectiveness {
  weak: string[];
  resistant: string[];
  immune?: string[];
}

interface TypeEffectivenessMap {
  [key: string]: TypeEffectiveness;
}

export const typeEffectiveness: TypeEffectivenessMap = {
  normal: { weak: ['fighting'], resistant: ['ghost'] },
  fire: { weak: ['water', 'rock', 'ground'], resistant: ['fire', 'grass', 'bug', 'steel', 'ice', 'fairy'] },
  water: { weak: ['electric', 'grass'], resistant: ['fire', 'water', 'ice', 'steel'] },
  electric: { weak: ['ground'], resistant: ['electric', 'flying', 'steel'] },
  grass: { weak: ['fire', 'ice', 'poison', 'flying', 'bug'], resistant: ['water', 'grass', 'electric', 'ground'] },
  ice: { weak: ['fire', 'fighting', 'rock', 'steel'], resistant: ['ice'] },
  fighting: { weak: ['flying', 'psychic', 'fairy'], resistant: ['bug', 'rock', 'dark'] },
  poison: { weak: ['ground', 'psychic'], resistant: ['grass', 'fighting', 'poison', 'bug', 'fairy'] },
  ground: { weak: ['water', 'ice', 'grass'], resistant: ['poison', 'rock'], immune: ['electric'] },
  flying: { weak: ['electric', 'ice', 'rock'], resistant: ['grass', 'fighting', 'bug'], immune: ['ground'] },
  psychic: { weak: ['bug', 'ghost', 'dark'], resistant: ['fighting', 'psychic'] },
  bug: { weak: ['fire', 'flying', 'rock'], resistant: ['grass', 'fighting', 'ground'] },
  rock: { weak: ['water', 'grass', 'fighting', 'ground', 'steel'], resistant: ['normal', 'fire', 'poison', 'flying'] },
  ghost: { weak: ['ghost', 'dark'], resistant: ['poison', 'bug'], immune: ['normal', 'fighting'] },
  dragon: { weak: ['ice', 'dragon', 'fairy'], resistant: ['fire', 'water', 'grass', 'electric'] },
  dark: { weak: ['fighting', 'bug', 'fairy'], resistant: ['ghost', 'dark'], immune: ['psychic'] },
  steel: { weak: ['fire', 'fighting', 'ground'], resistant: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'], immune: ['poison'] },
  fairy: { weak: ['poison', 'steel'], resistant: ['fighting', 'bug', 'dark'], immune: ['dragon'] }
};

  