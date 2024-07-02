import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonsService } from '../services/pokemons.service';
import { PokemonComponent } from '../pokemon/pokemon.component';  
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonComponent, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit{

  pokemons: Pokemon[] = [];
  isLoading = false;
  error: string | null = null; 

  constructor(private route : ActivatedRoute, private  pokemonsService: PokemonsService){} 


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');
      if (type) {
        this.fetchPokemonByType(type);
      }
    });
  }

  async fetchPokemonByType(type: string) {
    this.isLoading = true;
    this.error = null;
    try {
      this.pokemons = await this.pokemonsService.fetchPokemonByType(type);
    } catch (error) {
      this.error = 'Error fetching Pokémon list';
    } finally {
      this.isLoading = false;
    }
  }



}
