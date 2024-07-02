import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pokemon-search-bar.component.html',
  styleUrl: './pokemon-search-bar.component.scss'
})
export class PokemonSearchBarComponent {
  searchName: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchName.toLowerCase());
  }
}
