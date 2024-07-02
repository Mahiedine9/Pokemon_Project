import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'pokemons/:name', component: PokemonComponent },
    { path: 'type/:type', component: PokemonListComponent },
    { path: '**', redirectTo: '' }
];
