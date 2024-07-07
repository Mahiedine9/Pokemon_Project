import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, forkJoin } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  private speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(private http: HttpClient) {}

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${name}`);
  }

  getPokemonSpecies(name: string): Observable<any> {
    return this.http.get<any>(`${this.speciesUrl}/${name}`);
  }

  async fetchPokemonByName(name: string): Promise<Pokemon> {
    const observable = this.getPokemonByName(name);
    const pokemon =  await firstValueFrom(observable);

    const speciesObservable = this.getPokemonSpecies(name);
    const species = await firstValueFrom(speciesObservable);
    pokemon.color = species.color.name;

    return pokemon;
  }

  getPokemonByType(type: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/type/${type}`);
  }

  async fetchPokemonByType(type: string, limit: number = 30): Promise<Pokemon[]> {
    try {
      const response = await firstValueFrom(this.getPokemonByType(type));
      const pokemonList = response.pokemon.map((p: any) => p.pokemon.name).slice(0, limit);
      const pokemonDetailsRequests: Observable<Pokemon>[] = pokemonList.map((name: string) => {
        return this.getPokemonByName(name);
      });
      const pokemonDetails: Pokemon[] = await firstValueFrom(forkJoin(pokemonDetailsRequests));

      const speciesRequests: Observable<any>[] = pokemonList.map((name: string) => {
        return this.getPokemonSpecies(name);
      });
      const speciesDetails: any[] = await firstValueFrom(forkJoin(speciesRequests));

      pokemonDetails.forEach((pokemon, index) => {
        pokemon.color = speciesDetails[index].color.name;
      });

      return pokemonDetails;
    } catch (error) {
      throw new Error('Error fetching Pokémon list: ' + error);
    }
  }
}



