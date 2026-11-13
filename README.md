# S-rieScope
1. Présentation du projet

SérieScope est une application web monopage (Single Page Application) destinée à une médiathèque. Elle permet aux visiteurs de consulter un catalogue de séries et de documentaires, de rechercher des séries par nom et de filtrer les résultats par genre.

L'application permet également à l'équipe de la médiathèque d'ajouter de nouvelles séries grâce à un formulaire interactif.

Le projet est développé avec HTML5, Tailwind CSS et JavaScript Vanilla, sans backend ni base de données.

2. Objectifs du projet

Récupérer des données depuis une API externe avec fetch().

Manipuler des tableaux et des objets JavaScript.

Afficher dynamiquement les séries dans le DOM.

Rechercher une série par son nom.

Filtrer les séries par genre.

Ajouter une nouvelle série à l'aide d'un formulaire.

Valider les données saisies par l'utilisateur.

Créer une interface responsive et accessible.

3. Technologies utilisées

HTML5 : structure sémantique de l'application.

Tailwind CSS : mise en forme et responsive design.

JavaScript Vanilla (ES6+) : logique et interactions.

TVmaze API : récupération des données des séries.

Git & GitHub : gestion des versions et collaboration.

Jira : organisation et suivi des tâches.

Figma : zoning et conception des maquettes.

4. API utilisée

Le catalogue initial est récupéré depuis l'API TVmaze.

URL :
https://api.tvmaze.com/shows?page=0

Méthode HTTP : GET

Les données exploitées comprennent :

name : titre de la série.

language : langue.

status : statut de diffusion.

genres : liste des genres.

image.medium : affiche de la série.

summary : description de la série.

Seules les 20 premières séries sont conservées pour le catalogue initial.

5. Fonctionnalités principales

Catalogue

Récupération des séries depuis l'API.

Affichage dynamique sous forme de cartes.

Présentation du titre, de l'affiche, des genres et de la description.

Gestion des images et informations manquantes.

Recherche

Recherche par nom de série.

Recherche insensible aux majuscules et minuscules.

Actualisation des résultats à chaque saisie.

Filtrage par genre

Génération dynamique des genres disponibles.

Filtrage avec filter() et includes().

Possibilité d'afficher toutes les séries.

Affichage d'un message lorsqu'aucun résultat n'est trouvé.

Ajout d'une série

Formulaire avec trois champs obligatoires : titre, langue et genre.

Validation des champs.

Ajout dynamique de la nouvelle série au catalogue.

Réinitialisation du formulaire après l'ajout.
7. Installation et lancement

Prérequis

Un navigateur web moderne.

Visual Studio Code.

Git.

Node.js et npm pour la configuration de Tailwind CSS.

Installation

Cloner le dépôt :

git clone URL_DU_DEPOT

Accéder au dossier :

cd SerieScope

Installer les dépendances :

npm install

Lancer la compilation de Tailwind CSS si nécessaire :

npm run dev

Ouvrir le fichier index.html avec Live Server.

Message de confirmation.

Conservation des séries ajoutées dans un tableau JavaScript jusqu'au rechargement de la page.

SerieScope/
├── dist/
│   └── output.css        # CSS li t-generate (Tailwind build)
├── js/
│   └── script.js         # Logic dyal JavaScript
├── node_modules/         # Dependencies (ma-kay-tconsultach f Git)
├── src/
│   └── input.css         # CSS source (Tailwind directives)
├── hh.jpg                # Image
├── index.html            # Main page
├── main.svg              # Logo / icon
├── package-lock.json
├── package.json
├── README.md
└── Vector (1).png        # Image
