import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'pokemons/:name', component: PokemonComponent },
    { path: '**', redirectTo: '' }
];
