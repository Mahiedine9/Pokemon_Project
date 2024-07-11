import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../services/pokemons.service';
import { Pokemon } from '../models/pokemon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon-global-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-global-card.component.html',
  styleUrl: './pokemon-global-card.component.scss'
})
export class PokemonGlobalCardComponent implements OnInit {

  pokemon !: Pokemon;
  error: string | null = null;
  isLoading = false;

  constructor (
    private route : ActivatedRoute, 
    private pokemonsService: PokemonsService 
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.fetchPokemon(name);
      }
    });
  }

  async fetchPokemon(name: string) {
    try {
      this.pokemon = await this.pokemonsService.fetchPokemonByName(name);
    } catch (error) {
      this.error = 'Error fetching Pokémon';
    } finally {
      this.isLoading = false;
    }
  }

}
