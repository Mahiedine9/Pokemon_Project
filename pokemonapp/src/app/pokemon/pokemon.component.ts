import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import {CommonModule } from '@angular/common';
import { PokemonsService } from '../services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})

export class PokemonComponent implements OnInit{
  pokemon!: Pokemon ;
  error: string | null = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
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
    this.isLoading = true;
    this.error = null;
    try {
      this.pokemon = await this.pokemonsService.fetchPokemonByName(name);
    } catch (error) {
      this.error = 'Error fetching Pokémon';
    } finally {
      this.isLoading = false;
    }
  }
}

