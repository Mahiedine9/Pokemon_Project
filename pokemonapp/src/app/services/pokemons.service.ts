import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
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
}
