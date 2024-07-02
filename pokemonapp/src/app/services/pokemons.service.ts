import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom, forkJoin } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${name}`);
  }

  async fetchPokemonByName(name: string): Promise<Pokemon> {
    const observable = this.getPokemonByName(name);
    return await firstValueFrom(observable);
  }

  getPokemonByType(type: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/type/${type}`);
  }

  async fetchPokemonByType(type: string): Promise<Pokemon[]> {
    try {
      const response = await firstValueFrom(this.getPokemonByType(type));
      const pokemonList = response.pokemon.map((p: any) => p.pokemon.name);
      const pokemonDetailsRequests: Observable<Pokemon>[] = pokemonList.map((name: string) => {
        return this.getPokemonByName(name);
      });
      const pokemonDetails: Pokemon[] = await firstValueFrom(forkJoin(pokemonDetailsRequests));
      if (!pokemonDetails) {
        throw new Error('Error fetching Pokémon details');
      }
      return pokemonDetails;
    } catch (error) {
      throw new Error('Error fetching Pokémon list: ' + error);
    }
  }


}
