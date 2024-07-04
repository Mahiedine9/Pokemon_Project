import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-types-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './types-section.component.html',
  styleUrls: ['./types-section.component.scss']
})
export class TypesSectionComponent {
  pokemonTypes = [
    { name: 'fire' }, { name: 'water' }, { name: 'grass' }, { name: 'electric' },
  ];
  constructor(private router : Router){} 

  navigateToType(type: { name: string }): void {
    this.router.navigate(['/type', type.name]);
  }

}