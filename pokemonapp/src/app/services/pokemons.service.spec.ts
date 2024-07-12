import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from '../models/pokemon';


describe('PokemonsService', () => {
  let service: PokemonsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonsService]
    });

    service = TestBed.inject(PokemonsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a Pokémon by name (getPokemonByName)', () => {
    const dummyPokemon: Pokemon = {
      name: 'pikachu',
      sprites: { front_default: 'url-to-sprite' },
      types: [{ slot: 1, type: { name: 'electric' } }],
      height: 4,
      weight: 60,
      id: 25,
      color: '',
      stats: [],
      abilities: []
    };

    service.getPokemonByName('pikachu').subscribe(pokemon => {
      expect(pokemon).toEqual(dummyPokemon);
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/pikachu');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPokemon);
  });

  it('should fetch a Pokémon by name (fetchPokemonByName)', async () => {
    const dummyPokemon: Pokemon = {
      name: 'charizard',
      sprites: { front_default: 'url-to-sprite' },
      types: [{ slot: 1, type: { name: 'fire' } }],
      height: 17,
      weight: 905,
      id: 6,
      color: '',
      stats: [],
      abilities: []
    };

    const promise = service.fetchPokemonByName('charizard');

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/charizard');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPokemon);

    const pokemon = await promise;
    expect(pokemon).toEqual(dummyPokemon);
  });
});
