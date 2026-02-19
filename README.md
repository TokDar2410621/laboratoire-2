# Laboratoire #1 - CEPI Blog

## Structure du projet

```
Laboratoire #1/
├── docs/                           # Documentation
│   ├── Consignes.docx             # Instructions du laboratoire
│   └── Document de conception.docx # Document de conception
│
├── Maquette/                       # Prototype/Design du blog
│   ├── index.html                 # Page principale (liste des blogs)
│   ├── detailBlog.html           # Page de détail d'un blog
│   ├── img/                       # Images du projet
│   ├── Sass/                      # Styles SASS
│   │   ├── stylesheet/
│   │   │   └── style.sass        # Fichier source SASS
│   │   ├── style.css             # CSS compilé
│   │   └── style.css.map         # Source map
│   ├── esquisses/                # Esquisses et maquettes
│   ├── node_modules/             # Dépendances (Bootstrap)
│   ├── package.json              # Configuration npm
│   └── package-lock.json
│
├── tests/                         # Tests Cypress
│   ├── e2e/                      # Tests end-to-end
│   │   ├── testlien.cy.js       # Tests de liens
│   │   ├── 1-getting-started/
│   │   └── 2-advanced-examples/
│   ├── fixtures/                 # Données de test
│   ├── support/                  # Fichiers de support
│   └── cypress.config.js        # Configuration Cypress
│
├── node_modules/                 # Dépendances Cypress
├── package.json                  # Configuration npm racine
└── package-lock.json

```

## Palette de couleurs

- **Primary**: `#00ADB5` (turquoise/cyan)
- **Background**: `#EEEEEE` (gris clair)
- **Dark**: `#000000` (noir - textes et bordures)
- **White**: `#FFFFFF` (blanc - header/footer)

## Polices

- **Open Sans** (400, 700) - pour le contenu
- **Lora** (400, 700) - pour les titres

## Installation

### Maquette
```bash
cd Maquette
npm install
```

### Tests Cypress
```bash
npm install
```

## Compilation SASS

Pour compiler les fichiers SASS :
```bash
cd Maquette
npx sass Sass/stylesheet/style.sass Sass/style.css
```

## Tests

Pour lancer les tests Cypress :
```bash
npx cypress open
```

ou

```bash
cd tests
npx cypress open
```
