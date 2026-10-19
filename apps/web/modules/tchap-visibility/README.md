# Tchap visibility

Module ESM autonome chargé par `config.modules`, sans import interne à Element
ou Tchap. Nx construit le bundle et Webpack le copie dans
`/modules/tchap-visibility/`. Le mode développement surveille les sources ;
recharger la page après une modification.

## Configuration

Les configurations Tchap incluent :

```json
{
    "modules": ["/modules/tchap-visibility/index.js"],
    "tchap_features": { "feature_space": ["*"] }
}
```

`feature_space` accepte `*` ou une liste de domaines de MXID, ports compris.
Une configuration absente désactive la création d'espaces. L'interprétation
historique, notamment le joker sous forme de chaîne, est conservée.
Les autres composants suivent les autres modules puis le défaut d'Element.

## Contrat de l'API

- Le premier callback retournant un booléen gagne. Placer Tchap après les autres
  modules de visibilité et enregistrer les callbacks sans attente asynchrone :
  le chargeur exécute les méthodes `load()` en parallèle.
- `api.profile.value.userId` peut être absent ou ancien pendant une transition
  de session. Avec une liste de domaines, la décision suit le profil lors du
  prochain appel du callback ; le module ne déclenche pas de nouveau rendu.
  Avec `["*"]`, utilisé dans les quatre environnements Tchap, le profil n'intervient pas.
- L'API de visibilité est alpha. La plage `^1.17.0` doit être revalidée lors des
  mises à jour. Aucun correctif de `Profile.ts` n'est nécessaire.

## Vérification

Depuis la racine :

```sh
pnpm --filter @tchap/visibility build
pnpm --filter @tchap/visibility test:unit
pnpm --filter @tchap/visibility lint:types
```

Depuis `apps/web`, les tests d'intégration vérifient le chargeur, le profil,
la configuration et la priorité des callbacks :

```sh
pnpm test -- --runTestsByPath test/unit-tests/modules/TchapVisibilityModule-test.ts --runInBand
```
