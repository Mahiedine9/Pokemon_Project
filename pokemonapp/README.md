# Application Pokémon avec Angular

## Contributeurs

- Mahiedine Ferdjoukh

## Introduction

Ce projet est une application Angular qui utilise l'API PokéAPI pour afficher des informations sur différents Pokémon. L'objectif est de créer une interface intuitive permettant à l'utilisateur de rechercher et d'afficher des détails sur les Pokémon.

## Fonctionnalités

1. **Barre de Recherche Pokémon**
    - Permet à l'utilisateur de rechercher un Pokémon par son nom.
    - Affiche les informations principales du Pokémon trouvé.

2. **Affichage des Détails Pokémon**
    - Affiche le nom, l'image, le type, la taille, le poids et l'ID du Pokémon.

3. **Affichage de la Liste de Pokémon par Type**
    - Permet à l'utilisateur d'afficher une liste de Pokémon par leur type.
    - Affiche jusqu'à 30 Pokémon avec leurs images et noms.
    - Utilisation de CSS Grid pour un affichage en grille de quatres colonnes, avec des cartes élégantes et colorées.
    

4. **Navigation**
    - Utilisation du routage pour permettre à l'utilisateur de naviguer entre différentes vues.

## Structure du Projet

Le projet est structuré de la manière suivante :

- **Components** : Composants Angular utilisés pour afficher les vues de l'application.
  - `AppComponent` : Composant principal contenant la barre de recherche et servant de point d'entrée à l'application.
  - `PokemonComponent` : Composant pour afficher les détails d'un Pokémon.
  - `PokemonSearchBarComponent` : Composant pour la barre de recherche Pokémon.
  - `HeaderComponent` : Composant pour le header de l'application.
  - `FooterComponent` : Composant pour le footer de l'application.
  - `LandingPageComponent` : Composant de la page d'accueil.
  - `PokemonListComponent` : Composant pour afficher une liste de Pokémon par type.
  - `PokemonGlobalCardComponent` : Composant pour afficher les détails étendus d'un Pokémon, incluant les statistiques, les capacités et les faiblesses.

- **Services** : Services Angular pour la récupération des données depuis l'API.
  - `PokemonsService` : Service pour interagir avec l'API PokéAPI et récupérer les détails des Pokémon.

- **Models** : Définitions TypeScript des modèles utilisés dans l'application.
  - `Pokemon` : Modèle représentant les données d'un Pokémon.

- **Routing** : Configuration des routes pour naviguer entre les différentes vues de l'application.

- **Styles** : Fichiers SCSS pour le stylage des composants et des éléments de l'interface utilisateur.

- **Assets** : Images et autres ressources utilisées dans l'application.

## Installation

1. Clonez le repository depuis GitHub.
2. Installez les dépendances en exécutant `npm install`.

## Utilisation

1. Démarrez l'application en exécutant `ng serve`.
2. Accédez à l'application dans votre navigateur à l'adresse `http://localhost:4200`.

## Dépendances

- Angular CLI
- TypeScript
- RxJS

