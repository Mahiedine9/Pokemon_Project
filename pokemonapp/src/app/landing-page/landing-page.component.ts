import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonSearchBarComponent } from '../pokemon-search-bar/pokemon-search-bar.component';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonsService } from '../services/pokemons.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokemonSearchBarComponent, PokemonComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  pokemonTypes = [
    { name: 'fire' }, { name: 'water' }, { name: 'grass' }, { name: 'electric' },
  ];
  featuredPokemons: Pokemon[] = [];
  recentSearches: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService, private router: Router) {}

  ngOnInit(): void {
    this.loadFeaturedPokemons();
    this.loadRecentSearches();
  }

  loadFeaturedPokemons(): void {
    const featuredNames = ['pikachu', 'charizard', 'bulbasaur'];
    const requests = featuredNames.map(name => this.pokemonsService.fetchPokemonByName(name));
    Promise.all(requests).then(pokemons => this.featuredPokemons = pokemons);
  }

  loadRecentSearches(): void {
    const recentSearches = localStorage.getItem('recentSearches');
    if (recentSearches) {
      this.recentSearches = JSON.parse(recentSearches);
    }
  }

  navigateToType(type: { name: string }): void {
    this.router.navigate(['/type', type.name]);
  }
}
