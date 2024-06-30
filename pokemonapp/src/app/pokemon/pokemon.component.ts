import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{
  @Input() pokemon!: Pokemon;

  ngOnInit(): void {
      this.pokemon = new Pokemon(
        "test", 
        {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }, 
        [
          { slot: 1, type: { name: "grass" } },
          { slot: 2, type: { name: "poison" } }
        ], 
        7, 
        69, 
        12589
      );
  }
  


}
