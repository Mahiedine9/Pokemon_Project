import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PokemonSearchBarComponent } from '../pokemon-search-bar/pokemon-search-bar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, PokemonSearchBarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private router : Router){} 
  
  onSearch(name: string) {
    this.router.navigate(['/pokemons', name]);
  }


}
