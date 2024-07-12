import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import {CommonModule, NgStyle } from '@angular/common';
import {RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, RouterLink, NgStyle],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})

export class PokemonComponent{
  @Input() pokemon!: Pokemon ;


}

