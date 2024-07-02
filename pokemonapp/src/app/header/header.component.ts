import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PokemonSearchBarComponent } from '../pokemon-search-bar/pokemon-search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, PokemonSearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
