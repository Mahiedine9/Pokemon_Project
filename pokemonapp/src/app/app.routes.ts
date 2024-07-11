import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ContactComponent } from './contact/contact.component';
import { PokemonGlobalCardComponent } from './pokemon-global-card/pokemon-global-card.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'pokemons/:name', component: PokemonGlobalCardComponent },
    { path: 'type/:type', component: PokemonListComponent },
    { path : 'contacts', component : ContactComponent},
    { path: '**', redirectTo: '' }
];
