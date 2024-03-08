# Pokémon Catcher App

Nextjs 14 alkalmazás, ami lehetővé teszi pokémonok elkapását és gyűjtését.

## Alkalmazás indítása

`npm i && npm run dev`

## Tesztek futtatása

`npm run test`

Test Suites: 25 passed, 25 total
Tests: 51 passed, 51 total
coverage: ~ 80%

## Frontend

### Home page: '/'

- Pokemonok kilistázása a pokemon api-ból
- Paginálás lehetősége
- Szűrés név alapján
- Listából kiválasztott pokemon részleteinek megjelenítése
- Listából kiválasztott pokemon elkapása - elengedése

### Inventory page: '/inventory'

- Elkapott pokemonok kilistázása

## Backend

### Api routes:

- /api/pokemon/GET - elkapott pokemonok lekérdezése
- /api/pokemon/:pokemonName/GET - elkapott pokemon lekérdezése
- /api/pokemon/:pokemonName/POST - pokemon hozzáadása az adatbázishoz (elkapás)
- /api/pokemon/:pokemonName/POST - pokemon törlése az adatbázisból (elengedés)
